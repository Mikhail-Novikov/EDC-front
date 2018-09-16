
export default header;

function header() {

	var header = new Vue({
    el: '#header',
    data() {
      return {
      	show: false
      }
    },
    created: function(){
    	 document.addEventListener('click', this.closeAllWin);
    },
    methods: {
    	closeSearchWin: function(event){
    		return this.show == false ? this.show = true : this.show = false; 			
    	},
    	closeAllWin: function(event){ 
    		if( event.target.parentElement.classList[0] == "header__search-group" || event.target.parentElement.classList[0] == 'header__search-open-btn') return false;
    		this.show = false;
    	}
    }
  })

}

