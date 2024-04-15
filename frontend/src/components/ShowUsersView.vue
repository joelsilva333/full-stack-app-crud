<script setup>

</script>

<template>
  <div class="details-content">
    <h1>Detalhes</h1>

    <div class="details-container">
      <p>Nome: </p>
      <p>Sobrenome: </p>
      <p>Email: </p>

      <img :src="image" alt="" />
    </div>
  </div>
</template>

<style>
.details-content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
  width: 450px;
  height: 550px;
  font-family: Arial;
  color: #ffff;
  border-radius: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #448fe4, #0b2957);
  overflow: auto;

  > h1 {
    margin: 0;
    text-align: center;
    font-size: 25px;
    font-weight: 400;
  }

  > div.details-container {
    display: flex;
    flex-direction: column;
    margin: 25px 0;
    row-gap: 30px;
    width: 100%;

    > p {
      font-size: 16px;
      margin: 0;
    }

    > img {
      width: 200px;
      border-radius: 10px;
      margin: 0 auto;
    }
  }

  > button {
    margin-top: 0px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #8a8a8a9a;

    &:hover {
      background-color: #8a8a8ab9;
      cursor: pointer;
    }
  }
}
</style>
