<template>
  <div class="inputBox">
    <!-- v-on:keyup.enter로 버튼 구현  -->
    <span>
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    </span>
    <!--    <button v-on:click="addTodo">add</button>-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" v-on:click="showModal = false">
      <h3 slot="header" class="closeModalBtn">
        경고
        <i class="fas fa-times" v-on:click="showModal = false"></i>
      </h3>
      <h3 slot="body">
        아무것도 입력 안했어
      </h3>
      <h3 slot="footer">
        이건푸터
      </h3>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem === '') {
        this.showModal = !this.showModal
        return
      }
      this.$store.commit('addOneItem', this.newTodoItem)
      // this.$emit('addTodoItem', this.newTodoItem)
      this.clearInput();

    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    // Modal: Modal 생략 가능
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, mediumpurple);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
