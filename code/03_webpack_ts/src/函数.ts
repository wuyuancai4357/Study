(() => {



    //一般函数，方便调用
    function add(numx: number, numy?: number): number {
        return numx + numy
    }

    console.log(add(15, 20));

    //定义变量直接接收函数返回值，简单函数计算,参数有默认值，调用时可以不传值
    const comcatString = function (strx: string = "吴", stry?: string): string {
        return strx + stry
    }

    console.log(comcatString());


    //函数完整写法，显式说明了变量接收类型，参数类型，以及函数的返回类型
    const mask: (strx: string, stry: string) => string = function (strx: string, stry: string): string {
        return strx + stry
    }

    console.log(mask("very ", "good"));

    //不定参数个数  放在已定参数最后

    const compute: (n1: number, n2: number, ...args: number[]) => number = function (n1: number, n2: number, ...args: number[]): number {
        let sum: number = 0
        args.forEach(n => {
            sum += n
        });

        console.log(sum);
        sum += n1 + n2

        return sum
    }

    console.log(compute(1, 2, 3, 4));

    //函数重载

    //重载声明
    function test(x: string, y: string): string
    function test(x: number, y: number): number

    //一般情况函数声明内部判断返回不同的值
    function test(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y //字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {

            return x + y
        }
    }

    console.log(test(10, 20));
    console.log(test("吴", "远财"));

    //函数重载声明之后，实参类型不可以混用
    //console.log(test(15, "你好"));







})()