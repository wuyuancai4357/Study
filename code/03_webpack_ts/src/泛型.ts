((): void => {
    //一般函数
    function getarr(value: number, count: number): number[] {

        const arr: number[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value + i)
        }

        return arr
    }

    let arr1 = getarr(1, 5)
    console.log(arr1);


    //泛型函数
    function getarr1<T>(value: T, count: number): T[] {

        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }

        return arr
    }

    let arr2 = getarr1<number>(6.12324, 5)
    let arr3 = getarr1<string>("吴远财", 3)
    console.log(arr2);
    console.log(arr3);
    console.log(arr2[2].toFixed(3))
    console.log(arr3[1].split("远"));
    console.log("===================");

    //多个泛型参数的函数
    function getMsg<K, V>(value1: K, value2: V): [K, V] {


        return [value1, value2]
    }

    const arr = getMsg<number, string>(123.146692, "吴远财")

    console.log(arr[0].toFixed(2));
    console.log(arr[1].split("远"));

    console.log("---------------------------");
    //泛型接口

    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }


    class User {
        id?: number
        name: string

        constructor(name: string) {
            this.name = name
        }
    }
    class Person {
        name: string
        age: number
    }

    class UserCRUD implements IBaseCRUD<User>{

        data: Array<User> = []
        add(user: User): User {
            const temp = Date.now().toString()
            user.id = (Number)(temp.substr(temp.length - 4))
            this.data.push(user)

            return user
        }


        getUserId(id: number): User {

            return this.data.find(user => user.id = id)
        }


    }

    const usercrud = new UserCRUD()
    const { id } = (usercrud.add(new User("小明")))
    console.log(id);

    console.log(usercrud.getUserId(id));


    console.log("=============================>");

    //泛型类

    class Generic<T> {
        defaultValue: T
        add: (x: T, y: T) => T
    }

    const g1 = new Generic<number>()
    g1.defaultValue = 50
    g1.add = function (x, y): number {
        return x + y
    }
    console.log(g1.defaultValue);
    console.log(g1.add(1, 2));
    const g2 = new Generic<string>()

    g2.defaultValue = "吴远财"
    g2.add = function (x, y): string {
        return x + y
    }

    console.log(g2.defaultValue);
    console.log(g2.add("very ", "good"));


    //泛型约束

    

})()