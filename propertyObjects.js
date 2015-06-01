function $prop(ref,privateEnv){
	var arg=null;
	var name="";
	if(arguments.length%2!=0) throw "There is an inconsistency in the properties";
	if(arguments.length<=2) throw "There are no properties to add to the object";
	for(var i=2;i<arguments.length;i+=2){
		arg=arguments[i+1];
		name=arguments[i];
		ref[name]=(function(arg){return function(){
			if(arguments.length==0){
				if(arg.get === undefined) throw "Object does not have get";
				if(typeof arg.get != "function")
					return privateEnv[name];
				return arg.get();
			}
			else{
				if(arg.set === undefined) throw "Object does not have set";
				if(typeof arg.set != "function")
					privateEnv[name]=arguments[0];
				else
					arg.set(arguments[0]);
			}
		}})(arg);
	}
}
