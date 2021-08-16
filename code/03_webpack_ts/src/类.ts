(() => {

    class Animal {

        private _name: string
        public get name(): string {
            return this._name
        }
        public set name(value: string) {
            this._name = value
        }
        private _age: number
        public get age(): number {
            return this._age
        }
        public set age(value: number) {
            this._age = value
        }

        constructor(name: string, age: number) {
            this.name = name //this.name是调用的set方法，this._name是属性赋值
            this.age = age
        }

        sayHi(str: string) {
            console.log(`我是${this._name},今年${this._age}`, str)
        }

    }



    class Person extends Animal {



        private _gender: string
        public get gender(): string {
            return this._gender
        }
        public set gender(value: string) {
            this._gender = value
        }

        constructor(name: string, age: number, gender: string) {
            super(name, age)

            this.gender = gender
        }

        sayHi(str: string) {
            super.sayHi(str)
            console.log(`你好,我叫${this.name},今年${this.age}岁,是个${this.gender}生`, str)
        }


    }



    const person: Animal = new Person("小明", 15, "男")

    person.sayHi("你好")

})()