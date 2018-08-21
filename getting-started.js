const testform1 = {
  name : 'testform1',
  template : 
    '<div>\
      <form action="" @submit.prevent="showName" style="padding: 5px; border: 1px solid #555; border-radius : 4px"> \
        <fieldset>\
          <legend>Input</legend>\
          <label for="nameInput">Name: </label>\
          <input id="nameInput" type="text" v-model="name" placeholder="Type in your name" style="border : 1px solid #555; border-radius : 4px; color #555; padding : 5px ">\
          <input value="Test me" type="submit" style="padding : 5px; background-color : rgb(88,156,7); color : white; border-radius : 4px;">\
          <button @click="reset" style="padding : 5px; background-color : red; color : white; border-radius : 4px;">Reset</button>\
        </fieldset>\
        <fieldset style="margin-top : 20px;">\
          <legend>Result</legend>\
          <label>You entered: </label>\
          <input type="text" id="result" v-model="enteredName" disabled style="background-color : white">\
        </fieldset>\
      </form>\
    </div>',

    data : function() {
      return {
        name : "",
        enteredName : "No name entered"
      }
    },
    methods: {
      showName : function(){
        this.enteredName = this.name;
      },
      reset : function(){
        this.name = "";
      }
    }
};



var app = new Vue({
    el: '#sectionContent',
    components : {
      testform1 : testform1
    },
    data: {
      message : "Vue loaded!",
    }
  }
)