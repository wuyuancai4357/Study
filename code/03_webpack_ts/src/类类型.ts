(() => {
    interface IFly {
        fly()
    }

    interface ISwim{
        swim()
    }

    class Person implements IPerson {
        swim() {
            console.log("游泳")
        }
        //实现接口方法
        fly() {
            console.log("飞翔")
        }


    }
    const person = new Person()
    person.fly()
    person.swim()

    //接口集成接口
    interface IPerson extends IFly,ISwim{
    }

})()