const ec = {};
ec.genId = function () {
	let count = 0;
	return function () {
		return ++count;
	}
}();

Function.prototype.extends = function (Parent) {
	let fn = this;
	function wrapParent() {
		return Parent.apply(this, arguments);
	}
	wrapParent.prototype = Parent.prototype;

	fn.prototype = Object.create(wrapParent.prototype);
	fn.prototype.Super = wrapParent;
	fn.prototype.constructor = fn;
	return fn;
}

// 元数据
const Data = function Data() {
	this._id = ec.genId();
}

Data.prototype.setAttr = function (property, value) {
	let data = this;
	data._attrObject || (data._attrObject = {});
	let oldValue = data._attrObject[property];
	data.fp && data.fp('a:' + property, oldValue, value) && data.onAttrChanged && data.onAttrChanged(property, value);
}
Data.prototype.firePropertyChange = Data.prototype.fp = function (property, oldValue, newValue, compare) {
	if (oldValue === newValue) return false;
	let data = this , option = option || {};
	option.property = property;
	option.oldValue = oldValue;
	option.newValue = newValue;
	option.data = data;
	data.onPropertyChanged(option);
}
Data.prototype.onPropertyChanged = function (option) {
	
}





const Person = function (name) {
	this.setName(name);
}

Person.prototype.setName = function (name) {
	this._name = name;
}
// console.log(Student);
const Student = function Student(name, lesson) {
	this.Super(name);
	this.setLesson(lesson);
}

Student.prototype.setLesson = function (lesson) {
	this._lesson = lesson;
}


