# properties objects

Allows you simulate properties in your javascript objects as if it were C#

## How to implement it

1. Add the file propertyObjects.js to your project.
2. Reference propertyObjects.js in your pages like this:

```javascript
<script type="text/javascript" src="propertyObjects.js"></script>
```
3. Add new properties to your objects by calling the function $prop:

```javascript
function myfunction(){
        var name;
        var constantvalue=23;

        $prop(this,[],		
        	"Age",	{
        		get:{},set:{}
        	},
        	"Name",	{
        		get:function(){return name;},
        		set:function(value){name=value}
        	}, 
        	"ConstantValue",
        	{
        		get: function(){return constantvalue;}			
        	},
        	"OnlyModify",
        	{
        		set:{}
        	}
        );
}
//now you can easly call your properties as functions:
var newObject=new myfunction();
newObject.Name("George");
newObject.Age(28);
//you can access the properties like this
var name=newObject.Name(); 
var age=newObject.Age();
//these two examples throw exception
var constantvalue=newObject.OnlyModify();
newObject.ConstantValue(21);
```
### $prop function

```javascript
$prop(this,[],
		"property1",{get:function1,set:function2},
        "property2",{get:function1,set:function2},
        "property3",{get:function1,set:function2},
        ...
        "propertyN",{get:function1,set:function2})
```

#### Parameters
```javascript
$prop(ref, privateElements, listOfProperties);
```
1. [Ref](#): Reference to the object which will have the properties
2. [PrivateElments](#): Array of objects that stores variables for properties with no explicit get or set, they are supposed to be private.
3. [Name, propertyObj]: The name must be a string and propertyObj a JSON Object. The JSON object could be defined as follow:
```javascript
$prop(this,[],
		//Case with explicit functions. This doesn't create any new item 
        //in the private array object
        "property1",{
        	get:function() {return value1},
            set: function(value){ value1=value}
        },
        //Case with implicit get or set. This creates items
        //in the private array object
        "property2",{
        	get:{},set:{}
         },
         //case with no set. In this case it will throw exception when
         //attempting to modify the value
        "property3",{get:function(){return value3}},
        //case with no get. In this case it will throw exception when
        //attempting to access the value
        "propertyN",{set:function(value){valueN=value}});
```
