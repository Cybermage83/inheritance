(function(win){
  var menu = (function(){
    var menu = function(namespace,inherit){
      namespace = namepace || null;
      inherit   = inherit  || null;
      
      console.log('this',this,'namespace',namespace,'inherit',inherit);
      if(this === window){
        arguments.callee.prototype = {
          count:(this ===  window) ? 0 : this.count+=1,
          value:10,
          something:function(){return 'something';},
          getVal: function(){return this.value;},
          add:function(namespace,inherit){
                  var D = function(){};
  
                  D.prototype = this;
                  D.prototype[namespace] = inherit;
                  D.prototype.constructor = D;
                  return new D();
              }
          
          };
        
        if(namespace !== 'undefined' && namespace !== null && namespace !== '' && this === window){
          var F = function(){};
          F.prototype = inherit;
          arguments.callee.prototype[namespace] = new F();
          return arguments.callee;
        }else if(namespace !== 'undefined' && namespace !== null && namespace !== '' && this !== window){console.log('object!');
          var X = function(){};
          
          X.prototype = this;
          X.prototype[namespace] = inherit;
          X.prototype.constructor = X;                                                                                               
          return new X();
        }
        
        return (this === window) ? arguments.callee : this;
        
      }
    };
    return menu;
  })();

  var helper ={
            H:10,
            help:function(x){
              return x;
            }
        },

        other = {
            O:10,
            other:function(y){ return y;}
        };

        //var d = menu('HP',helper);
//        var a = new menu('III',d.prototype);
       var c = menu('other',helper);
        c = new c();
        var i = c.add('Help',helper);
        i = i.add('new',other);
//  /      c = c.add('other',other);
  
  
  
  console.log(c,i);
  i.value = 15;
  console.log(i.value,i)
  
})(window);