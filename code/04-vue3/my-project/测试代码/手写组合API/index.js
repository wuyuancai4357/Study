
//shallowReactive和reactive
{
    //定义reactivr=eHandlerr处理对象
    const reactiveHandler = {
        get(target, prop) {
            // 判断传入进来的属性中是不是有'_is_reactive'属性
            if (prop === '_is_reactive') {
                return true
            }
            const result = Reflect.get(target, prop);
            console.log("拦截了读取数据", target, prop);
            return result;
        },
        set(target, prop, value) {
            const result = Reflect.set(target, prop, value)

            console.log('拦截了更改数据', target, prop, value);
            return result
        },
        deleteProperty(target, prop) {
            const result = Reflect.deleteProperty(target, prop)
            console.log('拦截了删除数据', target, prop);
            return result
        },
    };

    //定义shallowReactive函数,并传入一个对象

    function shallowReactive(target) {
        //判断target是不是对象或数组
        if (target && typeof target == "object") {
            return new Proxy(target, reactiveHandler);
        }
        return target

    }

    //定义reactive函数,并传入一个对象

    function reactive(target) {
        //判断target是不是对象或数组,对target进行数据处理
        if (target && typeof target == "object") {
            // 递归处理数组或对象
            // 判断数据是不是数组
            if (Array.isArray(target)) {
                target.forEach((item, index) => {
                    target[index] = reactive(item)
                })
            }
            //判断数据是不是对象
            else {
                Object.keys(target).forEach(key => {
                    target[key] = reactive(target[key])
                })
            }
            //返回Proxy对象
            return new Proxy(target, reactiveHandler);
        }
        //基本类型数据直接返回
        return target

    }
}

//shallowRef和ref
{
    //定义shallowRef函数
    function shallowRef(target) {
        return {
            _value: target,
            _is_ref: true,//标识当前对象是否为ref对象
            get value() {
                console.log('拦截到读取数据');
                return this._value
            },
            set value(val) {
                console.log('拦截到操作数据,更新界面', val);
                this._value = val

            },
        }
    }


    // 定义ref函数

    function ref(target) {
        target = reactive(target)
        return {
            _value: target,
            _is_ref: true,
            get value() {
                console.log('拦截到读取数据');
                return this._value
            },
            set value(val) {
                console.log('拦截到操作数据,更新界面', val);
                this._value = val

            },
        }
    }




}

//shallowReadonly和Readonly
{
    const readonlyHandler = {
        get(target, prop) {
            if (prop === '_is_readonly') {
                return true
            }
            const result = Reflect.get(target, prop)
            console.log("拦截到了读取数据", target, prop);
            return result
        },
        set(target, prop, value) {
            console.log("只能读取数据，不能操作数据");
            return true
        },
        deleteProperty(target, prop) {
            console.log("只能读取数据，不能删除数据");
            return true
        },
    }


    //定义一个shallowReadonly函数
    function shallowReadonly(target) {
        //判断target是不是对象
        if (target && typeof target == "object") {
            return new Proxy(target, readonlyHandler)
        }
    }

    //定义一个readonly函数，递归实现深度只读
    function readonly(target) {
        //判断target是不是对象
        if (target && typeof target == "object") {
            //数组
            if (Array.isArray(target)) {
                target.forEach((item, index) => {
                    target[index] = readonly(item)
                })
            }
            //对象
            else {
                Object.keys(target).forEach(key => {
                    target[key] = readonly(target[key])
                })
            }
            return new Proxy(target, readonlyHandler)
        }
        //基本数据类型直接返回
        return target
    }
}


// 判断函数(isRef,isReactive,isReadonly,isProxy)
{
    // 定义isRef函数，判断当前对象是否为ref响应式对象
    function isRef(obj) {
        return obj && obj._is_ref
    }

    // 定义isReactive函数，判断当前对象是否为reactive响应式对象
    function isReactive(obj) {
        return obj && obj._is_reactive
    }

    // 定义isReadonly函数，判断当前对象是否为readonly对象
    function isReadonly(obj) {
        return obj && obj._is_readonly
    }

    // 定义isProxy函数，判断当前对象是否为reactive响应式对象或者readonly对象
    function isProxy(obj) {
        return isReactive(obj) || isReadonly(obj)
    }

}

