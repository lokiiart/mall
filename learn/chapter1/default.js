function myfunc(arg_1,arg_2,arg_3){
    if(arguments.length==0){
        arg_1 = "default_1";
        arg_2 = "default_2";
        arg_3 = "default_3";
    }else if(arguments.length==1){
        arg_2 = "default_2";
        arg_3 = "default_3";
    }else if(arguments.length==2){
        arg_3 = "default_3";
    }
    alert(arg_1+arg_2);
    alert(arg_3);
}

myfunc();
myfunc(6);
myfunc(3,4);
myfunc(3,4,5);
