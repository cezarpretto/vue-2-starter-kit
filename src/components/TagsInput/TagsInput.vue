<template>
  <div id="root">
    <div id="wrapper">
      <ul class="tags-input"  v-on:click="focusInput()" v-bind:class="{'disabled': disabled}">
        <li class="tags" v-for="tag in value">
          {{tag[fieldName]}}
          <i class="fa fa-times" v-on:click="remove(tag)" v-if="!disabled"></i>
        </li>
        <li class="tags-new" v-show="hasInput">
          <input type="text" v-on:keydown.enter="add()" v-bind:disabled="disabled" v-model="descricao" v-bind:placeholder="placeholder">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'placeholder', 'field', 'disabled', 'hasinput'],
  data() {
    return {
      descricao: '',
      input: undefined,
      fieldName: 'text',
      hasInput: undefined
    }
  },
  mounted() {
    // console.log(this.hasinput);
    this.input = this.$el.querySelector('input');
    if(this.field !== undefined){
      this.fieldName = this.field;
    }

    if(this.hasinput === undefined){
      this.hasInput = true;
    }else{
      this.hasInput = this.hasinput;
    }

    var count = 0;
    this.input.addEventListener('keyup', (e) => {
      if(this.descricao === '' && e.keyCode === 8 && this.value.length > 0){
        if(count === 1){
          count = 0
          this.descricao = this.value[this.value.length -1][this.fieldName];
          this.value.splice(this.value.length -1, 1);
        }else{
          this.addClassLastItem(true);
          count = 1;
        }
      }

      if(e.keyCode === 188){
        this.descricao = this.descricao.substring(0, this.descricao.length -1);
        this.add();
      }
    });
  },
  methods: {
    remove(tag){
      let idx = this.value.indexOf(tag);
      this.value.splice(idx, 1);
      this.$emit('input', this.value);
    },

    add(){
      if(this.descricao !== '' && this.descricao !== null){
        // this.inArray();
        if(this.inArray()){
          this.addClassLastItem(false);
          this.value.push({ [this.fieldName]: this.descricao });
          this.descricao = '';
          this.focusInput();
          this.$emit('input', this.value);
        }else{
          this.descricao = '';
        }
      }
    },

    focusInput() {
      this.input.focus();
    },

    inArray() {
      for (var i = 0; i < this.value.length; i++) {
        if(this.value[i][this.fieldName].toUpperCase() === this.descricao.toUpperCase()){
          return false;
        }
      }

      return true;
    },

    addClassLastItem(add) {
      let lis = this.$el.querySelectorAll('li')
      let last = lis[lis.length -2];

      if(last !== undefined){
        if(add){
          last.classList.add('tags-danger');
        }else{
          last.classList = [];
          last.classList.add('tags');
        }
      }
    }
  },
  watch: {
    value(val) {
      this.value = val;
    }
  }
}
</script>

<style>
p{
  margin:0 0 5px 0;
}

.tags-input{
  list-style : none;
  border:1px solid #ccc;
  display:inline-block;
  padding:5px;
  min-height: 34px;
  font-size:14px;
  /*background:#f3f3f3;*/
  width: 100%;
  border-radius:2px;
  overflow:hidden;
  color: #FFF;
}

.disabled{
  background:#EBEBE4;
}

.tags-input li{
  float:left;
}

.tags{
  background:#367FA9;
  padding:0px 20px 5px 8px;
  border-radius:2px;
  margin-right: 5px;
  margin-bottom: 2px;
  min-height: 20px;
  position: relative;
}

.tags-danger{
  background:#D9534F;
  padding:0px 20px 5px 8px;
  border-radius:2px;
  margin-right: 5px;
  margin-bottom: 2px;
  height: 20px;
  position: relative;
}

.tags i{
	position: absolute;
	right:6px;
	top:3px;
	width: 8px;
	height: 8px;
	content:'';
	cursor:pointer;
	opacity: .7;
  font-size:12px;
}

.tags i:hover{
	opacity: 1;
}

.tags-new input[type="text"]{
  border:0;
	margin: 0;
	padding: 0 0 0 3px;
	font-size: 14px;
	margin-top: 2px;
  background:transparent;
  color: #000;
}

.tags-new input[type="text"]:focus{
  outline:none;
}
</style>
