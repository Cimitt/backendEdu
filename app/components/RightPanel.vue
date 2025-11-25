<script setup>
import { ref } from "vue";

const quizzes = ref([
  {
    id: 1,
    title: "Quiz 1",
    color: "bg-red-500",
    question: "Apa ibukota Indonesia?",
    options: ["Jakarta", "Bandung", "Surabaya"],
    correct_answer: "Jakarta",
  },
  {
    id: 2,
    title: "Quiz 2",
    color: "bg-blue-400",
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    correct_answer: "4",
  },
  {
    id: 3,
    title: "Quiz 3",
    color: "bg-yellow-400",
    question: "Planet terbesar di tata surya?",
    options: ["Mars", "Jupiter", "Saturnus"],
    correct_answer: "Jupiter",
  },
]);

const selectedQuiz = ref(null);

function selectQuiz(quiz) {
  selectedQuiz.value = quiz;
}

function addOption() {
  selectedQuiz.value.options.push("");
}

function removeOption(i) {
  selectedQuiz.value.options.splice(i, 1);
}

function saveQuiz() {
  alert(`Quiz "${selectedQuiz.value.title}" disimpan!`);
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 p-4 overflow-y-auto">
    <div class="space-y-3">
      <div v-for="(quiz, index) in quizzes" :key="index"
        class="rounded-xl p-4 text-white font-semibold cursor-pointer transition-all duration-300 hover:scale-[1.02]"
        :class="[
          quiz.color,
          selectedQuiz?.id === quiz.id ? 'ring-4 ring-blue-400' : '',
        ]" @click="selectQuiz(quiz)">
        {{ quiz.title }}
      </div>
    </div>

    <div v-if="selectedQuiz" class="bg-white p-4 rounded-xl shadow-inner border">
      <h2 class="text-lg font-bold mb-3 text-gray-700">
        Edit {{ selectedQuiz.title }}
      </h2>

      <label class="block text-sm font-medium text-gray-700">Pertanyaan</label>
      <input v-model="selectedQuiz.question" type="text"
        class="w-full mt-1 border rounded-lg p-2 mb-3 focus:ring-2 focus:ring-blue-400" />

      <label class="block text-sm font-medium text-gray-700">Pilihan Jawaban</label>
      <div class="space-y-2 mt-1 mb-3">
        <div v-for="(opt, i) in selectedQuiz.options" :key="i" class="flex gap-2 items-center">
          <input v-model="selectedQuiz.options[i]" type="text"
            class="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
          <button type="button" @click="removeOption(i)" class="text-red-500 hover:text-red-700 text-sm">
            ✕
          </button>
        </div>

        <button type="button" @click="addOption" class="text-blue-500 text-sm mt-2 hover:underline">
          + Tambah Opsi
        </button>
      </div>

      <label class="block text-sm font-medium text-gray-700">Jawaban Benar</label>
      <select v-model="selectedQuiz.correct_answer"
        class="w-full mt-1 border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400">
        <option v-for="(opt, i) in selectedQuiz.options" :key="i" :value="opt">
          {{ opt }}
        </option>
      </select>

      <button type="button" @click="saveQuiz"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition">
        Simpan Perubahan
      </button>
    </div>

    <p v-else class="text-gray-400 text-sm text-center">
      Klik quiz untuk mengedit pertanyaannya
    </p>
  </div>
</template>
