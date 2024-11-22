<template>
  <div class="layout">
    <h1 class="title">Пожалуйста, загрузите данные</h1>
  <br />
  <p class="subtitle">Доступна загрузка данных в форматах xls, tsv или vcf</p>
  <br />
  <el-upload
    class="upload"
    drag
    ref="upload"
    :auto-upload="false"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">Перетащите файл сюда или кликните для загрузки</div>
  </el-upload>
    <el-button class="upload-button" type="success" @click="submitUpload">
      Загрузить на сервер
    </el-button>
  </div>
</template>


<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const upload = ref()

const submitUpload = () => {
  upload.value!.submit()
}
</script>

<style>
.layout {
  padding: 400px 0;
}
.el-upload {
  background-color: #bfc6dc;
}
.upload-button {
  border: 2px solid #89e159;
  border-radius: 8px;
  color: #89e159;
  background-color: #141b25;
  padding: 20px 30px;
  font-size: 16px;
  font-weight: 700;
  margin: 20px auto;
  display: flex;
}
.upload-button:hover {
  color: rgb(20, 27, 37);
}
.el-upload__text {
  color: rgb(20, 27, 37) !important;
}
.el-icon--upload {
  color: #5ec724 !important;
  opacity: 0.7;
}
h1,
.subtitle {
  text-align: center;
}
</style>