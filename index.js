//question=1
 class Movie{
            constructor(name,studio,rating){
                this.name=name;
                this.studio=studio;
                if(rating==undefined){
                    this.rating="PG"
                }else{
                    this.rating=rating
                }
            
            }
            getPG(array){
                let result=[]
                for(var i=0;i<array.length;i++){
                if(array[i].rating=="PG"){
                    result.push(array[i])
                }

            }
            return result
            
        }}

        var m1=new Movie("casino royale", "Eon Productions","PG13" )
        var m2=new Movie("xyz royale", "eyn production",)
        var m3=new Movie("byz royale"," tuo production","pg23")
        var m4=new Movie("mio royale", "voi production", )
        var m5=new Movie("prt royale", "ikl production")
        let array=[m1,m2,m3,m4,m5]
        // console.log(m1)
        console.log(m2.getPG(array))




//ques3 
    class person{
        constructor(name,fullname,age,height,quallification,workExperience,){
         this.name=name;
         this.fullname=fullname;
         this.age=age;
         this.height=height;
         this.quallification=quallification;
         this.workExperience=workExperience

        }
    }



//ques 2


  class uberPrice{
        constructor(cityName,destination,distance){
            this.cityName=cityName;
            this.destination=destination;
            this.distance=distance
        }

        getRate(destination,distance){
            let baseFare=200
            let farePerKilometer=20
           return (distance*farePerKilometer)+baseFare
        }
    }
    var u1=new uberPrice("delhi","mumbai",1400)
    var u2=new uberPrice("delhi","chandigarh",500)
    console.log(u1.getRate("mumbai",140))



// ques4
class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }

    getRadius(){
        return this.radius

    }
    setRadius(a){
        this.radius=a
    }
    getColor(){
        return this.color
    }
    setcolor(t){
        this.color=t
    }
    tostring(){
        return `"Circle[radius= ${this.radius}, color=${this.color}]"`
    }
    getArea(){
      c=  this.radius*Math.PI*this.radius
        return c
    }
    getCircumference(){
        return 2*this.radius*Math.PI
    }
}

var c1=new circle(23,"blue")
console.log(c1.getCircumference())
