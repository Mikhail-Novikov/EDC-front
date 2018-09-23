const { required, minLength, sameAs } = require('vuelidate/lib/validators');

export default validForm();

function validForm(){
  var form = document.getElementById('valid_form');
  if (typeof(form) == 'undefined' || form == null) return false;

  new Vue({
    el: '#valid_form',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        login:'',
        password: '',
        cpassword: '',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(3),
      },
      message: {
        required: false,
        minLength: minLength(10)        
      },
      login: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(3),
      },
      cpassword: {
        sameAsPassword: sameAs('password')
      }           
    },
    methods: {
      status(validation) { 
        return {
          error: !validation.minLength

        }
      },
      minerror(validation) {
        return {
          minerr: !validation.minLength,
        }
      },
      isEmailValid: function() {
        return (this.email == "")? "" : (this.reg.test(this.email)) ? 'hidden' : 'error';
      },
      submitStatus: function() {
        return this.$v.$invalid
      }
    }
  })
}