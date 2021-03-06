var gators = [
  {name: "Elvis Vessley",
    hobbies: "surfing, dancing",
    weight: 865,
    likesIceCream: true,
    imgSource: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/10c413dcc4d444acbd6810f483028933"
  },{name: "Little Britches",
    hobbies: "shaking, eating fruit",
    weight: 361,
    likesIceCream: true,
    imgSource: "http://nebula.wsimg.com/5df260927e75521ad0f18fae842e522e?AccessKeyId=00569247111AAAE64481&disposition=0&alloworigin=1"
  },{name: "Wanda Snapson",
    hobbies: "having parties",
    weight: 712,
    likesIceCream: false,
    imgSource: "http://www.vaguebuttrue.com/images/1449775760-alligatorclimbsfenceWEBSITE.jpg"
  }
]

var app = new Vue({
  el: '#app',
  data: {
    alligators: gators
  },
  methods: {
    test: function(){
      console.log("test was called")
    },
    filter: function(){
      console.log("filter was called")
      // if checkbox is checked
      if(document.getElementById("icecream").checked){
      // set this.alligators to only likesIceCream ===true
//      console.log("Show Icecream Alligators")
      this.alligators = gators.filter(g => g.likesIceCream)

      } else {
        
      //alligators
      this.alligators = gators
//      console.log("Show Lactose Intolerant Alligators")
      }
    },
    
    sortAsc: function() {
//      console.log("sortAsc called")
      this.alligators = gators.sort(function(a,b){return a.weight-b.weight})
    },
    
    sortDesc: function(){
//      console.log("sortDesc called")
      this.alligators = gators.sort(function(a,b){return b.weight - a.weight})
    },
    
  }
})
