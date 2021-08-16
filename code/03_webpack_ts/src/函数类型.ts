(() => {
    //函数类型
    interface ISearchFunc {
        //defined调用签名
        (source: string, sunstring: string): boolean
    }
    //defined 函数,类型为k接口
    const searchString = function (source: string, substring: string): boolean {
        return source.search(substring) > -1

    }

    console.log(searchString("1243", "1"))
})()