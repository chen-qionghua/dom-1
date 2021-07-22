const div = dom.find('#test>.red')[0]; //获取id名为test的标签中同时类名为red的伪数组中的 第一个元素
dom.style(div, 'color', 'red'); //设置div.style.color

const divList = dom.find('.red'); //获取多个div.red元素
dom.each(divList, (n) => console.log(n)) //遍历divList里的所有元素并调用剪头函数打印出来