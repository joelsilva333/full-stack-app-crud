<script setup>
import { reactive, ref } from "vue";
import jsPDF from "jspdf";
import DetailsContainer from "./components/DetailsContainer.vue";

const dados = reactive({
  nome: "",
  sobrenome: "",
  email: "",
  foto: "",
});

const doc = new jsPDF();
const foto = ref(null);

const mostrarDetalhes = ref(false);

function enviarForm() {
  const nome = dados.nome;
  const sobrenome = dados.sobrenome;
  const email = dados.email;

  if (foto.value) {
    // Converte o objeto File para um URL de objeto
    const imageURL = URL.createObjectURL(foto.value);
    console.log(imageURL);
    // Atribui o URL da imagem à propriedade 'foto'
    dados.foto = imageURL;

    doc.addImage(imageURL, "JPEG", 10, 30, 50, 50);
  }

  doc.rect(2, 2, 206, 293);
  doc.text(`Nome: ${nome} ${sobrenome}`, 10, 10);
  doc.text(`Email: ${email}`, 10, 20);

  mostrarDetalhes.value = true;
}

function fecharDetalhes() {
  mostrarDetalhes.value = false;
  dados.nome = "";
  dados.sobrenome = "";
  dados.email = "";
  dados.foto = "";
  doc.save("Formulario.pdf");
}
</script>

<template>
  <div class="main-container">
    <h1>
      GSC <br />
      CHALLENGE
    </h1>
    <div class="input-container">
      <div>
        <input
          type="text"
          placeholder="Digite o seu nome"
          id="nome"
          v-model="dados.nome"
        />
        <input
          type="text"
          placeholder="Digite o seu sobrenome"
          id="sobrenome"
          v-model="dados.sobrenome"
        />
      </div>

      <div>
        <input
          type="email"
          name=""
          placeholder="Digite o seu email"
          id="email"
          v-model="dados.email"
        />
      </div>

      <div>
        <input type="file" v-on:change="foto = $event.target.files[0]" />
      </div>
    </div>
    <button @click="enviarForm">Enviar</button>
  </div>

  <div class="modal" v-if="mostrarDetalhes">
    <DetailsContainer
      :nome="dados.nome"
      :sobrenome="dados.sobrenome"
      :email="dados.email"
      :fecharDetalhes="fecharDetalhes"
      :image="dados.foto"
      v-if="mostrarDetalhes"
    />
  </div>
</template>

<style scoped>
.main-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  font-family: Arial;
  color: #ffff;
  box-sizing: border-box;

  > h1 {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
    box-sizing: border-box;
    width: 100%;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      > input {
        height: 35px;
        padding: 15px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.199);
        color: rgba(255, 255, 255, 0.795);
        border: none;
        border-radius: 8px;
        width: 280px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.795);
        }
      }

      > input[id="email"] {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  > button {
    margin-top: 30px;
    width: 120px;
    height: 50px;
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

.modal {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
