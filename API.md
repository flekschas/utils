# API Docs

- [Animation](#animation)
- [Array](#array)
- [Color](#color)
- [Conversion](#conversion)
- [Dom](#dom)
- [Event](#event)
- [Functional Programming](#functional-programming)
- [Geometry](#geometry)
- [Index](#index)
- [Map](#map)
- [Math](#math)
- [Object](#object)
- [Other](#other)
- [Sorting](#sorting)
- [String](#string)
- [Timing](#timing)
- [Type Checking](#type-checking)
- [Vector](#vector)


* * *

# Animation

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#cubicIn">cubicIn</a> ⇒ <code>number</code></dt>
<dd><p>Cubic in easing function</p>
</dd>
<dt><a href="#cubicInOut">cubicInOut</a> ⇒ <code>number</code></dt>
<dd><p>Cubic in and out easing function</p>
</dd>
<dt><a href="#cubicOut">cubicOut</a> ⇒ <code>number</code></dt>
<dd><p>Cubic out easing function</p>
</dd>
<dt><a href="#interpolateNumber">interpolateNumber</a> ⇒ <code>number</code></dt>
<dd><p>Linearly interpolate two numbers</p>
</dd>
<dt><a href="#interpolateVector">interpolateVector</a> ⇒ <code>array</code></dt>
<dd><p>Lineraly interpolate a numerical vector</p>
</dd>
<dt><a href="#linear">linear</a> ⇒ <code>number</code></dt>
<dd><p>Linear easing function</p>
</dd>
<dt><a href="#quadIn">quadIn</a> ⇒ <code>number</code></dt>
<dd><p>Quadratic in easing function</p>
</dd>
<dt><a href="#quadInOut">quadInOut</a> ⇒ <code>number</code></dt>
<dd><p>Quadratic in and out easing function</p>
</dd>
<dt><a href="#quadOut">quadOut</a> ⇒ <code>number</code></dt>
<dd><p>Quadratic out easing function</p>
</dd>
<dt><a href="#quartIn">quartIn</a> ⇒ <code>number</code></dt>
<dd><p>Quartic in easing function</p>
</dd>
<dt><a href="#quartInOut">quartInOut</a> ⇒ <code>number</code></dt>
<dd><p>Quartic out easing function</p>
</dd>
<dt><a href="#quartOut">quartOut</a> ⇒ <code>number</code></dt>
<dd><p>Quartic in and out easing function</p>
</dd>
<dt><a href="#quintIn">quintIn</a> ⇒ <code>number</code></dt>
<dd><p>Quintic in easing function</p>
</dd>
<dt><a href="#quintInOut">quintInOut</a> ⇒ <code>number</code></dt>
<dd><p>Quintic out easing function</p>
</dd>
<dt><a href="#quintOut">quintOut</a> ⇒ <code>number</code></dt>
<dd><p>Quintic in and out easing function</p>
</dd>
</dl>

<a name="cubicIn"></a>

## cubicIn ⇒ <code>number</code>
Cubic in easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="cubicInOut"></a>

## cubicInOut ⇒ <code>number</code>
Cubic in and out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="cubicOut"></a>

## cubicOut ⇒ <code>number</code>
Cubic out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="interpolateNumber"></a>

## interpolateNumber ⇒ <code>number</code>
Linearly interpolate two numbers

**Kind**: global constant  
**Returns**: <code>number</code> - The interpolated number  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | The start value |
| b | <code>number</code> | The end value |
| p | <code>number</code> | The interpolation progress. Must be in [0, 1] where `0`   refers to the start value and `1` to the end value |


* * *

<a name="interpolateVector"></a>

## interpolateVector ⇒ <code>array</code>
Lineraly interpolate a numerical vector

**Kind**: global constant  
**Returns**: <code>array</code> - The interpolated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | The start vector |
| b | <code>array</code> | The end vector |
| p | <code>number</code> | The interpolation progress. Must be in [0, 1] where `0`   refers to the start vector and `1` to the end vector |


* * *

<a name="linear"></a>

## linear ⇒ <code>number</code>
Linear easing function

**Kind**: global constant  
**Returns**: <code>number</code> - Same as the input  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quadIn"></a>

## quadIn ⇒ <code>number</code>
Quadratic in easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quadInOut"></a>

## quadInOut ⇒ <code>number</code>
Quadratic in and out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quadOut"></a>

## quadOut ⇒ <code>number</code>
Quadratic out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quartIn"></a>

## quartIn ⇒ <code>number</code>
Quartic in easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quartInOut"></a>

## quartInOut ⇒ <code>number</code>
Quartic out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quartOut"></a>

## quartOut ⇒ <code>number</code>
Quartic in and out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quintIn"></a>

## quintIn ⇒ <code>number</code>
Quintic in easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quintInOut"></a>

## quintInOut ⇒ <code>number</code>
Quintic out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

<a name="quintOut"></a>

## quintOut ⇒ <code>number</code>
Quintic in and out easing function

**Kind**: global constant  
**Returns**: <code>number</code> - The eased time  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The input time to be eased. Must be in [0, 1] where `0`   refers to the start and `1` to the end |


* * *

# Array

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#array2dTranspose">array2dTranspose</a> ⇒ <code>array</code></dt>
<dd><p>Transpose a nested 2D array</p>
</dd>
<dt><a href="#clearArray">clearArray</a> ⇒ <code>array</code></dt>
<dd><p>Clear an array without while keeping it&#39;s reference</p>
</dd>
<dt><a href="#hasSameElements">hasSameElements</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if two arrays contain the same elements</p>
</dd>
<dt><a href="#unique">unique</a> ⇒ <code>array</code></dt>
<dd><p>Return unique values of an array</p>
</dd>
</dl>

<a name="array2dTranspose"></a>

## array2dTranspose ⇒ <code>array</code>
Transpose a nested 2D array

**Kind**: global constant  
**Returns**: <code>array</code> - The transposed 2D nested matrix-like array  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>array</code> | The matrix-liked 2D nested array to be transposed |


* * *

<a name="clearArray"></a>

## clearArray ⇒ <code>array</code>
Clear an array without while keeping it's reference

**Kind**: global constant  
**Returns**: <code>array</code> - The array itself  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | Array to be cleared |


* * *

<a name="hasSameElements"></a>

## hasSameElements ⇒ <code>boolean</code>
Check if two arrays contain the same elements

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the two arrays contain the same elements  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | First array |
| b | <code>array</code> | Second array |


* * *

<a name="unique"></a>

## unique ⇒ <code>array</code>
Return unique values of an array

**Kind**: global constant  
**Returns**: <code>array</code> - Array with unique values  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | Input array |


* * *

# Color

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#decToRgb">decToRgb</a> ⇒ <code>number</code></dt>
<dd><p>Convert a HEX string to its decimal representation</p>
</dd>
<dt><a href="#hexToDec">hexToDec</a> ⇒ <code>number</code></dt>
<dd><p>Convert a HEX string to its decimal representation</p>
</dd>
<dt><a href="#hexToRgbaArray">hexToRgbaArray</a> ⇒ <code>array</code></dt>
<dd><p>Convert a HEX-encoded color to an RGBA-encoded color</p>
</dd>
<dt><a href="#hexToRgbArray">hexToRgbArray</a> ⇒ <code>array</code></dt>
<dd><p>Convert a HEX-encoded color to an RGB-encoded color</p>
</dd>
<dt><a href="#rgbaStrToRgbaArray">rgbaStrToRgbaArray</a></dt>
<dd><p>Same as <code>rgbStrToRgbArray()</code></p>
</dd>
<dt><a href="#rgbStrToDec">rgbStrToDec</a> ⇒ <code>number</code></dt>
<dd><p>Convert RGB string to its decimal representation</p>
</dd>
<dt><a href="#rgbStrToRgbArray">rgbStrToRgbArray</a> ⇒ <code>number</code></dt>
<dd><p>Convert RGB(A) string to its array representation</p>
</dd>
<dt><a href="#rgbToHex">rgbToHex</a> ⇒ <code>string</code></dt>
<dd><p>Convert RGB values to a HEX string</p>
</dd>
<dt><a href="#toRgbaArray">toRgbaArray</a></dt>
<dd><p>Convert a color to an RGBA color</p>
</dd>
</dl>

<a name="decToRgb"></a>

## decToRgb ⇒ <code>number</code>
Convert a HEX string to its decimal representation

**Kind**: global constant  
**Returns**: <code>number</code> - Decimal representation  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | HEX string |


* * *

<a name="hexToDec"></a>

## hexToDec ⇒ <code>number</code>
Convert a HEX string to its decimal representation

**Kind**: global constant  
**Returns**: <code>number</code> - Decimal representation  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | HEX string |


* * *

<a name="hexToRgbaArray"></a>

## hexToRgbaArray ⇒ <code>array</code>
Convert a HEX-encoded color to an RGBA-encoded color

**Kind**: global constant  
**Returns**: <code>array</code> - Triple holding the RGBA values.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | HEX-encoded color string. |
| normalize | <code>boolean</code> | If `true` the returned RGBA values will be   normalized to `[0,1]`. |


* * *

<a name="hexToRgbArray"></a>

## hexToRgbArray ⇒ <code>array</code>
Convert a HEX-encoded color to an RGB-encoded color

**Kind**: global constant  
**Returns**: <code>array</code> - Triple holding the RGB values.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | HEX-encoded color string. |
| normalize | <code>boolean</code> | If `true` the returned RGB values will be   normalized to `[0,1]`. |


* * *

<a name="rgbaStrToRgbaArray"></a>

## rgbaStrToRgbaArray
Same as `rgbStrToRgbArray()`

**Kind**: global constant  

* * *

<a name="rgbStrToDec"></a>

## rgbStrToDec ⇒ <code>number</code>
Convert RGB string to its decimal representation

**Kind**: global constant  
**Returns**: <code>number</code> - Decimal representation  

| Param | Type | Description |
| --- | --- | --- |
| rgbStr | <code>string</code> | RGB string |


* * *

<a name="rgbStrToRgbArray"></a>

## rgbStrToRgbArray ⇒ <code>number</code>
Convert RGB(A) string to its array representation

**Kind**: global constant  
**Returns**: <code>number</code> - RGB(A) array  

| Param | Type | Description |
| --- | --- | --- |
| rgbStr | <code>string</code> | RGB(A) string |


* * *

<a name="rgbToHex"></a>

## rgbToHex ⇒ <code>string</code>
Convert RGB values to a HEX string

**Kind**: global constant  
**Returns**: <code>string</code> - HEX string  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Red component |
| g | <code>number</code> | Green component |
| b | <code>number</code> | Blue component |


* * *

<a name="toRgbaArray"></a>

## toRgbaArray
Convert a color to an RGBA color

**Kind**: global constant  
**Return{array}**: Quadruple defining an RGBA color.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>\*</code> | Color to be converted. Currently supports:   HEX, RGB, or RGBA. |
| normalize | <code>boolean</code> | If `true` the returned RGBA values will be   normalized to `[0,1]`. |


* * *

# Conversion

[⬆️ Back to the top](#api-docs)

<a name="iteratorToArray"></a>

## iteratorToArray ⇒ <code>array</code>
Store the values of an iterator in an array.

This code is about 9x faster than `Array.from()`

**Kind**: global constant  
**Returns**: <code>array</code> - The array with the map keys  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>map</code> | The map whose keys are to be converted to an array |


* * *

# Dom

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#addClass">addClass</a></dt>
<dd><p>Method to add a class name to an HTML or SVG element.</p>
</dd>
<dt><a href="#createHtmlByTemplate">createHtmlByTemplate</a> ⇒ <code>node</code></dt>
<dd><p>Create HTML from a template string</p>
</dd>
<dt><a href="#hasClass">hasClass</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if an HTML or SVG element has a certain class</p>
</dd>
<dt><a href="#isParentOf">isParentOf</a> ⇒ <code>boolean</code></dt>
<dd><p>Test whether a DOM element is the parent of another DOM element.</p>
</dd>
<dt><a href="#removeAllChildren">removeAllChildren</a></dt>
<dd><p>Remove all children of a DOM node</p>
</dd>
<dt><a href="#removeClass">removeClass</a></dt>
<dd><p>Remove a class from an HTML or SVG element.</p>
</dd>
<dt><a href="#removeLastChild">removeLastChild</a></dt>
<dd><p>Remove last child of a DOM node</p>
</dd>
</dl>

<a name="addClass"></a>

## addClass
Method to add a class name to an HTML or SVG element.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>object</code> | HTML or SVG element to add a class to. |
| className | <code>string</code> | The class name to be added. |


* * *

<a name="createHtmlByTemplate"></a>

## createHtmlByTemplate ⇒ <code>node</code>
Create HTML from a template string

**Kind**: global constant  
**Returns**: <code>node</code> - Root DOM element  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | HTML template string |


* * *

<a name="hasClass"></a>

## hasClass ⇒ <code>boolean</code>
Check if an HTML or SVG element has a certain class

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` `element` has the class name  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>object</code> | HTML or SVG element to be checked |
| className | <code>string</code> | Class name to be checked for |


* * *

<a name="isParentOf"></a>

## isParentOf ⇒ <code>boolean</code>
Test whether a DOM element is the parent of another DOM element.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` `parent` is a parent of `element`.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>object</code> | Potential child element. |
| parent | <code>object</code> | Target parent element which is tested to have `el`   as a child. |


* * *

<a name="removeAllChildren"></a>

## removeAllChildren
Remove all children of a DOM node

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | DOM node whose children are to be removed |


* * *

<a name="removeClass"></a>

## removeClass
Remove a class from an HTML or SVG element.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>object</code> | HTML or SVG element. |
| className | <code>string</code> | Class name to be removed. |


* * *

<a name="removeLastChild"></a>

## removeLastChild
Remove last child of a DOM node

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>object</code> | DOM node whose last child is to be removed |


* * *

# Event

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#cloneEvent">cloneEvent</a> ⇒ <code>object</code></dt>
<dd><p>Clone an event by invoking the source event&#39;s constructor and passing in
  the source event.</p>
</dd>
<dt><a href="#forwardEvent">forwardEvent</a></dt>
<dd><p>Forward an event by cloning and dispatching it.</p>
</dd>
</dl>

<a name="cloneEvent"></a>

## cloneEvent ⇒ <code>object</code>
Clone an event by invoking the source event's constructor and passing in
  the source event.

**Kind**: global constant  
**Returns**: <code>object</code> - Cloned event  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | Source event to be cloned. |


* * *

<a name="forwardEvent"></a>

## forwardEvent
Forward an event by cloning and dispatching it.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | Event to be forwarded. |
| target | <code>object</code> | Target HTML element for the event. |


* * *

# Functional Programming

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#forEach">forEach</a> ⇒ <code>array</code></dt>
<dd><p>More flexible and applicable to other array-like data types.</p>
</dd>
<dt><a href="#map">map</a> ⇒ <code>array</code></dt>
<dd><p>The pure map function is more powerful because it can be used on data types
other than Array too.</p>
</dd>
<dt><a href="#mapFilter">mapFilter</a> ⇒ <code>function</code></dt>
<dd><p>Map and filter data in one iteration.</p>
<p>Combining the loops is about 7-8x faster than</p>
</dd>
<dt><a href="#pipe">pipe</a> ⇒ <code>function</code></dt>
<dd><p>Convenience function to compose functions</p>
</dd>
<dt><a href="#some">some</a> ⇒ <code>*</code></dt>
<dd><p>Functional version of <code>Array.forEach</code>. More flexible and applicable to
  other array-like data types like <code>NodeList</code>.</p>
</dd>
<dt><a href="#withConstructor">withConstructor</a></dt>
<dd><p>Assign a constructor to the object</p>
</dd>
<dt><a href="#withForwardedMethod">withForwardedMethod</a></dt>
<dd><p>Forward a method call</p>
</dd>
<dt><a href="#withProperty">withProperty</a></dt>
<dd><p>Assign a property to an object</p>
</dd>
<dt><a href="#withReadOnlyProperty">withReadOnlyProperty</a></dt>
<dd><p>Assign a read-only property to an object</p>
</dd>
<dt><a href="#withStaticProperty">withStaticProperty</a></dt>
<dd><p>Assign a static property to an object</p>
</dd>
</dl>

<a name="forEach"></a>

## forEach ⇒ <code>array</code>
More flexible and applicable to other array-like data types.

**Kind**: global constant  
**Returns**: <code>array</code> - Modified array-like variable.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | Modifier function applied on every item of the array. |


* * *

<a name="map"></a>

## map ⇒ <code>array</code>
The pure map function is more powerful because it can be used on data types
other than Array too.

**Kind**: global constant  
**Returns**: <code>array</code> - Mapped array  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | Mapping function |


* * *

<a name="mapFilter"></a>

## mapFilter ⇒ <code>function</code>
Map and filter data in one iteration.

Combining the loops is about 7-8x faster than

**Kind**: global constant  
**Returns**: <code>function</code> - A function that accepts a single array paremeter  

| Param | Type | Description |
| --- | --- | --- |
| mapFn | <code>function</code> | Mapping function |
| filterFn | <code>function</code> | Filter function |


* * *

<a name="pipe"></a>

## pipe ⇒ <code>function</code>
Convenience function to compose functions

**Kind**: global constant  
**Returns**: <code>function</code> - The composed function  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Array of functions |


* * *

<a name="some"></a>

## some ⇒ <code>\*</code>
Functional version of `Array.forEach`. More flexible and applicable to
  other array-like data types like `NodeList`.

**Kind**: global constant  
**Returns**: <code>\*</code> - Modified array-like variable.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | Modifier function applied on every item of the   array. |


* * *

<a name="withConstructor"></a>

## withConstructor
Assign a constructor to the object

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| constructor | <code>function</code> | Constructor functions |


* * *

<a name="withForwardedMethod"></a>

## withForwardedMethod
Forward a method call

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Exposed function name |
| fn | <code>function</code> | Function to be forwarded |


* * *

<a name="withProperty"></a>

## withProperty
Assign a property to an object

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the property |
| options | <code>object</code> | Option object |
| options.initialValue | <code>\*</code> | Initial value of the property |
| options.getter | <code>function</code> | Custom getter |
| options.setter | <code>function</code> | Custom setter |
| options.cloner | <code>function</code> | Clone function. Used before the value   is returned. |
| options.transformer | <code>function</code> | Value transformer. Used before a new   value is set. |
| options.validator | <code>function</code> | Validator function decides whether the   new and transformed value is set or not. |


* * *

<a name="withReadOnlyProperty"></a>

## withReadOnlyProperty
Assign a read-only property to an object

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the property |
| getter | <code>function</code> | Getter function |


* * *

<a name="withStaticProperty"></a>

## withStaticProperty
Assign a static property to an object

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the property |
| value | <code>\*</code> | Static value |


* * *

# Geometry

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#isPointHalfwayInRect">isPointHalfwayInRect</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a 2D or 1D point is within a rectangle or range</p>
</dd>
<dt><a href="#isPointInPolygon">isPointInPolygon</a> ⇒ <code>boolean</code></dt>
<dd><p>From: <a href="https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html">https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html</a></p>
</dd>
<dt><a href="#isPointInRect">isPointInRect</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a 2D or 1D point is within a rectangle or range</p>
</dd>
<dt><a href="#l1PointDist">l1PointDist</a> ⇒ <code>number</code></dt>
<dd><p>Identical but much faster than <code>l1Dist([fromX, fromY], [toX, toY])</code></p>
</dd>
<dt><a href="#l2PointDist">l2PointDist</a> ⇒ <code>number</code></dt>
<dd><p>Identical but much faster than <code>l2Dist([fromX, fromY], [toX, toY])</code></p>
</dd>
<dt><a href="#lPointDist">lPointDist</a></dt>
<dd><p>Identical but much faster than <code>lDist(l)([fromX, fromY], [toX, toY])</code></p>
</dd>
<dt><a href="#lRectDist">lRectDist</a></dt>
<dd><p>L distance between a pair of rectangles</p>
</dd>
</dl>

<a name="isPointHalfwayInRect"></a>

## isPointHalfwayInRect ⇒ <code>boolean</code>
Check if a 2D or 1D point is within a rectangle or range

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the [x,y] point is in the rectangle.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The point's X coordinate. |
| y | <code>number</code> | The point's Y coordinate. |
| minX | <code>number</code> | The rectangle's start X coordinate. |
| maxX | <code>number</code> | The rectangle's start X coordinate. |
| minY | <code>number</code> | The rectangle's start X coordinate. |
| maxY | <code>number</code> | The rectangle's start X coordinate. |


* * *

<a name="isPointInPolygon"></a>

## isPointInPolygon ⇒ <code>boolean</code>
From: https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` point lies within the polygon.  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Array</code> | Tuple of the form `[x,y]` to be tested. |
| polygon | <code>Array</code> | 1D list of vertices defining the polygon. |


* * *

<a name="isPointInRect"></a>

## isPointInRect ⇒ <code>boolean</code>
Check if a 2D or 1D point is within a rectangle or range

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the [x,y] point is in the rectangle.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The point's X coordinate. |
| y | <code>number</code> | The point's Y coordinate. |
| minX | <code>number</code> | The rectangle's start X coordinate. |
| maxX | <code>number</code> | The rectangle's start X coordinate. |
| minY | <code>number</code> | The rectangle's start X coordinate. |
| maxY | <code>number</code> | The rectangle's start X coordinate. |


* * *

<a name="l1PointDist"></a>

## l1PointDist ⇒ <code>number</code>
Identical but much faster than `l1Dist([fromX, fromY], [toX, toY])`

**Kind**: global constant  
**Returns**: <code>number</code> - L1 distance  

| Param | Type | Description |
| --- | --- | --- |
| fromX | <code>number</code> | X coordinate of the first point |
| fromY | <code>number</code> | Y coordinate of the first point |
| toX | <code>number</code> | X coordinate of the second point |
| toY | <code>number</code> | Y coordinate of the first point |


* * *

<a name="l2PointDist"></a>

## l2PointDist ⇒ <code>number</code>
Identical but much faster than `l2Dist([fromX, fromY], [toX, toY])`

**Kind**: global constant  
**Returns**: <code>number</code> - L2 distance  

| Param | Type | Description |
| --- | --- | --- |
| fromX | <code>number</code> | X coordinate of the first point |
| fromY | <code>number</code> | Y coordinate of the first point |
| toX | <code>number</code> | X coordinate of the second point |
| toY | <code>number</code> | Y coordinate of the first point |


* * *

<a name="lPointDist"></a>

## lPointDist
Identical but much faster than `lDist(l)([fromX, fromY], [toX, toY])`

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>number</code> | Defines the Lp space |


* * *

<a name="lRectDist"></a>

## lRectDist
L distance between a pair of rectangles

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>number</code> | Defines the Lp space |


* * *

# Index

[⬆️ Back to the top](#api-docs)

# Map

[⬆️ Back to the top](#api-docs)

# Math

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#clamp">clamp</a> ⇒ <code>Number</code></dt>
<dd><p>About 18% faster than <code>Math.max(min, Math.min(max, value))</code></p>
</dd>
<dt><a href="#identity">identity</a> ⇒ <code>*</code></dt>
<dd><p>Identity function</p>
</dd>
<dt><a href="#isClose">isClose</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if two floats are close given some precision</p>
</dd>
</dl>

<a name="clamp"></a>

## clamp ⇒ <code>Number</code>
About 18% faster than `Math.max(min, Math.min(max, value))`

**Kind**: global constant  
**Returns**: <code>Number</code> - Clamped value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Value to be clamped |
| min | <code>Number</code> | Min value |
| max | <code>Number</code> | Max value |


* * *

<a name="identity"></a>

## identity ⇒ <code>\*</code>
Identity function

**Kind**: global constant  
**Returns**: <code>\*</code> - `x`  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | Any kind of value |


* * *

<a name="isClose"></a>

## isClose ⇒ <code>boolean</code>
Test if two floats are close given some precision

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the difference between the floats is less than
  10^-precision  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First float |
| b | <code>number</code> | Second float |
| precision | <code>number</code> | Number of decimal places to check |


* * *

# Object

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#deepClone">deepClone</a> ⇒ <code>object</code></dt>
<dd><p>Deep clone an object.</p>
</dd>
<dt><a href="#extend">extend</a> ⇒ <code>object</code></dt>
<dd><p>Extend an object with another object.</p>
</dd>
<dt><a href="#update">update</a> ⇒ <code>object</code></dt>
<dd><p>Update the target object by the source object. Besides extending that target
object, properties that are not present in the source object.</p>
</dd>
</dl>

<a name="deepClone"></a>

## deepClone ⇒ <code>object</code>
Deep clone an object.

**Kind**: global constant  
**Returns**: <code>object</code> - Cloned `source` object.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>object</code> | Object to be cloned. |


* * *

<a name="extend"></a>

## extend ⇒ <code>object</code>
Extend an object with another object.

**Kind**: global constant  
**Returns**: <code>object</code> - Cloned `source` object  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>object</code> | Target object or `undefined` if a new object should   be created. |
| source | <code>object</code> | Object to be cloned. |


* * *

<a name="update"></a>

## update ⇒ <code>object</code>
Update the target object by the source object. Besides extending that target
object, properties that are not present in the source object.

**Kind**: global constant  
**Returns**: <code>object</code> - Cloned `source` object  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>object</code> | Target object or `undefined` if a new object should   be created. |
| source | <code>object</code> | Object to be cloned. |


* * *

# Other

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#createWorker">createWorker</a> ⇒ <code>Worker</code></dt>
<dd><p>Create a worker from a function</p>
</dd>
<dt><a href="#noop">noop</a></dt>
<dd><p>Synonym for <code>toVoid()</code> because it&#39;s a convention</p>
</dd>
<dt><a href="#toVoid">toVoid</a> ⇒ <code>undefined</code></dt>
<dd><p>An adventure into the void!</p>
</dd>
</dl>

<a name="createWorker"></a>

## createWorker ⇒ <code>Worker</code>
Create a worker from a function

**Kind**: global constant  
**Returns**: <code>Worker</code> - Worker function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be turned into a worker |


* * *

<a name="noop"></a>

## noop
Synonym for `toVoid()` because it's a convention

**Kind**: global constant  

* * *

<a name="toVoid"></a>

## toVoid ⇒ <code>undefined</code>
An adventure into the void!

**Kind**: global constant  
**Returns**: <code>undefined</code> - The explorers find nothing but void.  

* * *

# Sorting

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#argSort">argSort</a> ⇒ <code>array</code></dt>
<dd><p>Return a list of indices sorted by the array</p>
</dd>
<dt><a href="#sortPos">sortPos</a> ⇒ <code>array</code></dt>
<dd><p>Return the sort position of each element in an array or object</p>
</dd>
</dl>

<a name="argSort"></a>

## argSort ⇒ <code>array</code>
Return a list of indices sorted by the array

**Kind**: global constant  
**Returns**: <code>array</code> - Array of indices sorted by the values  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | Array of numerical values |
| comparator | <code>function</code> | Pairwise value comparator function |

**Example**  
```js
const X = [9, 5, 11, -1, 0];
const sortedIdx = argSort(X);
// >> [3, 4, 1, 0, 2]
// I.e., the smallest element is X[sortedIdx[0]] == -1
```

* * *

<a name="sortPos"></a>

## sortPos ⇒ <code>array</code>
Return the sort position of each element in an array or object

**Kind**: global constant  
**Returns**: <code>array</code> - Array of the sorted value positions  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | Array of numerical values |
| comparator | <code>function</code> | Pairwise value comparator function |

**Example**  
```js
let array = [9, 5, 11, -1, 0];
let pos = sortPos(array)
// >> [3, 2, 4, 0, 1]
// I.e., the first element of `array` is at position pos[0] == 3

let object = { 1: 9, 2: 5, 11: 11, 100: -1, 999: 0 };
let pos = sortPos(object)
// >> { 1: 3, 2: 2, 11: 4, 100: 0, 999: 1 }
// I.e., element `999` of `object` is at position pos[999] == 1
```

* * *

# String

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#nthIndexOf">nthIndexOf</a> ⇒ <code>number</code></dt>
<dd><p>FInd the nth instance of the query string</p>
</dd>
<dt><a href="#randomString">randomString</a> ⇒ <code>string</code></dt>
<dd><p>Create a random string from some alphabet</p>
</dd>
</dl>

<a name="nthIndexOf"></a>

## nthIndexOf ⇒ <code>number</code>
FInd the nth instance of the query string

**Kind**: global constant  
**Returns**: <code>number</code> - Index of the nth query string or -1  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to search across |
| query | <code>string</code> | String to search for |
| n | <code>number</code> | nth instance |


* * *

<a name="randomString"></a>

## randomString ⇒ <code>string</code>
Create a random string from some alphabet

**Kind**: global constant  
**Returns**: <code>string</code> - Random string  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | Length of the random string |
| alphabet | <code>string</code> | Possible characters |


* * *

# Timing

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#debounce">debounce</a> ⇒ <code>function</code></dt>
<dd><p>Function calls are delayed by <code>wait</code> milliseconds and only one out of
multiple function calls is executed.</p>
</dd>
<dt><a href="#nextAnimationFrame">nextAnimationFrame</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a promise that resolves after the next <code>n</code> animation frames</p>
</dd>
<dt><a href="#throttle">throttle</a> ⇒ <code>function</code></dt>
<dd><p>A throttled function will only ever be called every <code>wait</code> milliseconds at
most.</p>
</dd>
<dt><a href="#throttleAndDebounce">throttleAndDebounce</a> ⇒ <code>function</code></dt>
<dd><p>Throttle and debounce a function call</p>
<p>Throttling a function call means that the function is called at most every
<code>interval</code> milliseconds no matter how frequently you trigger a call.
Debouncing a function call means that the function is called the earliest
after <code>finalWait</code> milliseconds wait time where the function was not called.
Combining the two ensures that the function is called at most every
<code>interval</code> milliseconds and is ensured to be called with the very latest
arguments after after <code>finalWait</code> milliseconds wait time at the end.</p>
<p>The following imaginary scenario describes the behavior:</p>
<p>MS | throttleTime=3 and debounceTime=3</p>
<ol>
<li>y(f, 3, 3)(args1) =&gt; f(args1) called</li>
<li>y(f, 3, 3)(args2) =&gt; call ignored due to throttling</li>
<li>y(f, 3, 3)(args3) =&gt; call ignored due to throttling</li>
<li>y(f, 3, 3)(args4) =&gt; f(args4) called</li>
<li>y(f, 3, 3)(args5) =&gt; all ignored due to throttling</li>
<li>No call           =&gt; nothing</li>
<li>No call           =&gt; f(args5) called due to debouncing</li>
</ol>
</dd>
<dt><a href="#timeout">timeout</a></dt>
<dd><p>Synonym for <code>wait()</code> because <code>await timeout(250)</code> reads nicer</p>
</dd>
<dt><a href="#wait">wait</a> ⇒ <code>Promise</code></dt>
<dd><p>Promise that resolves after some time</p>
</dd>
</dl>

<a name="debounce"></a>

## debounce ⇒ <code>function</code>
Function calls are delayed by `wait` milliseconds and only one out of
multiple function calls is executed.

**Kind**: global constant  
**Returns**: <code>function</code> - Debounced function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be debounced |
| wait | <code>number</code> | Number of milliseconds to debounce the function call. |


* * *

<a name="nextAnimationFrame"></a>

## nextAnimationFrame ⇒ <code>Promise</code>
Get a promise that resolves after the next `n` animation frames

**Kind**: global constant  
**Returns**: <code>Promise</code> - A promise that resolves after the next `n` animation frames  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | Number of animation frames to wait |


* * *

<a name="throttle"></a>

## throttle ⇒ <code>function</code>
A throttled function will only ever be called every `wait` milliseconds at
most.

**Kind**: global constant  
**Returns**: <code>function</code> - Throttled function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to be throttled |
| wait | <code>number</code> | Number of milliseconds calls are throttled |


* * *

<a name="throttleAndDebounce"></a>

## throttleAndDebounce ⇒ <code>function</code>
Throttle and debounce a function call

Throttling a function call means that the function is called at most every
`interval` milliseconds no matter how frequently you trigger a call.
Debouncing a function call means that the function is called the earliest
after `finalWait` milliseconds wait time where the function was not called.
Combining the two ensures that the function is called at most every
`interval` milliseconds and is ensured to be called with the very latest
arguments after after `finalWait` milliseconds wait time at the end.

The following imaginary scenario describes the behavior:

MS | throttleTime=3 and debounceTime=3
1. y(f, 3, 3)(args1) => f(args1) called
2. y(f, 3, 3)(args2) => call ignored due to throttling
3. y(f, 3, 3)(args3) => call ignored due to throttling
4. y(f, 3, 3)(args4) => f(args4) called
5. y(f, 3, 3)(args5) => all ignored due to throttling
6. No call           => nothing
7. No call           => f(args5) called due to debouncing

**Kind**: global constant  
**Returns**: <code>function</code> - - Throttled and debounced function  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>functon</code> | Function to be throttled and debounced |
| interval | <code>number</code> | Throttle intevals in milliseconds |
| wait | <code>number</code> | Debounce wait time in milliseconds By default this is   the same as `interval`. |


* * *

<a name="timeout"></a>

## timeout
Synonym for `wait()` because `await timeout(250)` reads nicer

**Kind**: global constant  

* * *

<a name="wait"></a>

## wait ⇒ <code>Promise</code>
Promise that resolves after some time

**Kind**: global constant  
**Returns**: <code>Promise</code> - Promise resolving after `msec` milliseconds  

| Param | Type | Description |
| --- | --- | --- |
| msec | <code>number</code> | Time in milliseconds until the promise is resolved |


* * *

# Type Checking

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#isArray">isArray</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if a variable is an array</p>
</dd>
<dt><a href="#isFunction">isFunction</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if a variable is a function</p>
</dd>
<dt><a href="#isHex">isHex</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a string is a valid HEX color encoding</p>
</dd>
<dt><a href="#isNormFloat">isNormFloat</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a number is in <code>[0,1]</code>.</p>
</dd>
<dt><a href="#isNormFloatArray">isNormFloatArray</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if an array consist of normalized numbers that are in <code>[0,1]</code> only.</p>
</dd>
<dt><a href="#isNumber">isNumber</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if a variable is a number</p>
</dd>
<dt><a href="#isObject">isObject</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if a variable is a plain object, e.g., <code>{}</code></p>
</dd>
<dt><a href="#isRgbaArray">isRgbaArray</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if an array is encoding an RGBA color.</p>
</dd>
<dt><a href="#isRgbArray">isRgbArray</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if an array is encoding an RGB color.</p>
</dd>
<dt><a href="#isRgbaStr">isRgbaStr</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a string is encoding an RGBA color.</p>
</dd>
<dt><a href="#isRgbStr">isRgbStr</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a string is encoding an RGB color.</p>
</dd>
<dt><a href="#isString">isString</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a variable is a string</p>
</dd>
<dt><a href="#isUint8">isUint8</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if a number is an interger and in <code>[0,255]</code>.</p>
</dd>
<dt><a href="#isUint8Array">isUint8Array</a> ⇒ <code>boolean</code></dt>
<dd><p>Tests if an array consist of Uint8 numbers only.</p>
</dd>
</dl>

<a name="isArray"></a>

## isArray ⇒ <code>boolean</code>
Test if a variable is an array

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the variable is an array.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>\*</code> | The variable to test |


* * *

<a name="isFunction"></a>

## isFunction ⇒ <code>boolean</code>
Test if a variable is a function

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the variable is a function.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>\*</code> | The variable to test |


* * *

<a name="isHex"></a>

## isHex ⇒ <code>boolean</code>
Tests if a string is a valid HEX color encoding

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the string is a valid HEX color encoding.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | HEX-encoded color string. |


* * *

<a name="isNormFloat"></a>

## isNormFloat ⇒ <code>boolean</code>
Tests if a number is in `[0,1]`.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the number is in `[0,1]`.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Number to be tested. |


* * *

<a name="isNormFloatArray"></a>

## isNormFloatArray ⇒ <code>boolean</code>
Tests if an array consist of normalized numbers that are in `[0,1]` only.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array contains only numbers in `[0,1]`.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | Array to be tested |


* * *

<a name="isNumber"></a>

## isNumber ⇒ <code>boolean</code>
Test if a variable is a number

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true`, `x` is a number.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | Variable to be tested |


* * *

<a name="isObject"></a>

## isObject ⇒ <code>boolean</code>
Test if a variable is a plain object, e.g., `{}`

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the variable is a plain object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>\*</code> | The variable to test |


* * *

<a name="isRgbaArray"></a>

## isRgbaArray ⇒ <code>boolean</code>
Tests if an array is encoding an RGBA color.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array hold a quadruple of normalized floats,
  a quadruple of Uint8s, or a triple of Uint8 and one normalized float.  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>array</code> | Array to be tested |


* * *

<a name="isRgbArray"></a>

## isRgbArray ⇒ <code>boolean</code>
Tests if an array is encoding an RGB color.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array hold a triple of Uint8 numbers or
  a triple of normalized floats.  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>array</code> | Array to be tested |


* * *

<a name="isRgbaStr"></a>

## isRgbaStr ⇒ <code>boolean</code>
Tests if a string is encoding an RGBA color.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array hold a quadruple of Uint8 numbers or
  a quadruple of normalized floats.  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>string</code> | String to be tested |


* * *

<a name="isRgbStr"></a>

## isRgbStr ⇒ <code>boolean</code>
Tests if a string is encoding an RGB color.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array hold a triple of Uint8 numbers or
  a triple of normalized floats.  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>string</code> | String to be tested |


* * *

<a name="isString"></a>

## isString ⇒ <code>boolean</code>
Tests if a variable is a string

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` variable is a string  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>\*</code> | Variable to be tested |


* * *

<a name="isUint8"></a>

## isUint8 ⇒ <code>boolean</code>
Tests if a number is an interger and in `[0,255]`.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the number is an interger and in `[0,255]`.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Number to be tested. |


* * *

<a name="isUint8Array"></a>

## isUint8Array ⇒ <code>boolean</code>
Tests if an array consist of Uint8 numbers only.

**Kind**: global constant  
**Returns**: <code>boolean</code> - If `true` the array contains only Uint8 numbers.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>array</code> | Array to be tested. |


* * *

# Vector

[⬆️ Back to the top](#api-docs)

## Constants

<dl>
<dt><a href="#aggregate">aggregate</a> ⇒ <code>array</code> | <code>number</code></dt>
<dd><p>Aggregate a vector using one or more aggregators. Like a multi-purpose reducer.</p>
</dd>
<dt><a href="#diff">diff</a> ⇒ <code>array</code></dt>
<dd><p>Get the difference of two vectoe</p>
</dd>
<dt><a href="#l1Dist">l1Dist</a> ⇒ <code>array</code></dt>
<dd><p>This is identical but much faster than <code>lDist(1)(v, w)</code></p>
</dd>
<dt><a href="#l1DistByDim">l1DistByDim</a> ⇒ <code>function</code></dt>
<dd><p>This is identical but faster than <code>l1Dist(v, w)</code></p>
</dd>
<dt><a href="#l2Dist">l2Dist</a> ⇒ <code>array</code></dt>
<dd><p>This is identical but much faster than <code>lDist(2)(v, w)</code></p>
</dd>
<dt><a href="#l2DistByDim">l2DistByDim</a> ⇒ <code>function</code></dt>
<dd><p>This is identical but faster than <code>l2Dist(v, w)</code></p>
</dd>
<dt><a href="#l2Norm">l2Norm</a> ⇒ <code>number</code></dt>
<dd><p>This is identical but much faster than <code>Math.hypot(...v)</code></p>
</dd>
<dt><a href="#lDist">lDist</a></dt>
<dd><p>L distance between a pair of vectors</p>
</dd>
<dt><a href="#max">max</a> ⇒ <code>number</code></dt>
<dd><p>This version is muuuch faster than <code>Math.max(...v)</code>.</p>
</dd>
<dt><a href="#maxVector">maxVector</a> ⇒ <code>array</code></dt>
<dd><p>Get the max vector</p>
</dd>
<dt><a href="#mean">mean</a> ⇒ <code>number</code></dt>
<dd><p>Get the mean of a vector</p>
</dd>
<dt><a href="#meanNan">meanNan</a> ⇒ <code>number</code></dt>
<dd><p>Roughly 30% slower than <code>mean()</code></p>
</dd>
<dt><a href="#meanVector">meanVector</a> ⇒ <code>array</code></dt>
<dd><p>Get the mean vector</p>
</dd>
<dt><a href="#median">median</a> ⇒ <code>number</code></dt>
<dd><p>Get the median of a vector</p>
</dd>
<dt><a href="#medianVector">medianVector</a> ⇒ <code>array</code></dt>
<dd><p>Get the median vector</p>
</dd>
<dt><a href="#min">min</a> ⇒ <code>number</code></dt>
<dd><p>This version is muuuch faster than <code>Math.min(...v)</code> and support longer
vectors than 256^2, which is a limitation of <code>Math.min.apply(null, v)</code>.</p>
</dd>
<dt><a href="#minVector">minVector</a> ⇒ <code>array</code></dt>
<dd><p>Get the min vector</p>
</dd>
<dt><a href="#mod">mod</a> ⇒ <code>number</code></dt>
<dd><p>Non-negative modulo function. E.g., <code>mod(-1, 5) === 4</code> while <code>-1 % 5 === -1</code>.</p>
</dd>
<dt><a href="#normalize">normalize</a> ⇒ <code>array</code></dt>
<dd><p>Normalize vector</p>
</dd>
<dt><a href="#range">range</a> ⇒ <code>array</code></dt>
<dd><p>A function to created a range array</p>
</dd>
<dt><a href="#rangeMap">rangeMap</a> ⇒ <code>array</code></dt>
<dd><p>This is equivalent to <code>Array(length).fill().map(mapFn)</code> but about 60% faster</p>
</dd>
<dt><a href="#sum">sum</a> ⇒ <code>number</code></dt>
<dd><p>Get the sum of a vector while ignoring NaNs</p>
</dd>
<dt><a href="#sumVector">sumVector</a> ⇒ <code>array</code></dt>
<dd><p>Get the sum vector</p>
</dd>
<dt><a href="#unionIntegers">unionIntegers</a> ⇒ <code>array</code></dt>
<dd><p>Get the unique union of two vectors of integers</p>
</dd>
</dl>

<a name="aggregate"></a>

## aggregate ⇒ <code>array</code> \| <code>number</code>
Aggregate a vector using one or more aggregators. Like a multi-purpose reducer.

**Kind**: global constant  
**Returns**: <code>array</code> \| <code>number</code> - A single or multiple aggregagted values  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerivcal vector |
| aggregater | <code>array</code> \| <code>function</code> | A single or multiple aggregator functions. The aggregator functions work like reducers. |
| startValue | <code>array</code> \| <code>number</code> | A single or multiple start values |
| options.getter | <code>function</code> | A value getter |


* * *

<a name="diff"></a>

## diff ⇒ <code>array</code>
Get the difference of two vectoe

**Kind**: global constant  
**Returns**: <code>array</code> - Difference vector  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vectors |
| w | <code>array</code> | Numerical vectors |


* * *

<a name="l1Dist"></a>

## l1Dist ⇒ <code>array</code>
This is identical but much faster than `lDist(1)(v, w)`

**Kind**: global constant  
**Returns**: <code>array</code> - L2 distance  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | First vector |
| w | <code>array</code> | Second vector |


* * *

<a name="l1DistByDim"></a>

## l1DistByDim ⇒ <code>function</code>
This is identical but faster than `l1Dist(v, w)`

**Kind**: global constant  
**Returns**: <code>function</code> - A function with the same signature as `l1Dist`  

| Param | Type | Description |
| --- | --- | --- |
| dim | <code>number</code> | Dimension of the input data |


* * *

<a name="l2Dist"></a>

## l2Dist ⇒ <code>array</code>
This is identical but much faster than `lDist(2)(v, w)`

**Kind**: global constant  
**Returns**: <code>array</code> - L2 distance  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | First vector |
| w | <code>array</code> | Second vector |


* * *

<a name="l2DistByDim"></a>

## l2DistByDim ⇒ <code>function</code>
This is identical but faster than `l2Dist(v, w)`

**Kind**: global constant  
**Returns**: <code>function</code> - A function with the same signature as `l2Dist`  

| Param | Type | Description |
| --- | --- | --- |
| dim | <code>number</code> | Dimension of the input data |


* * *

<a name="l2Norm"></a>

## l2Norm ⇒ <code>number</code>
This is identical but much faster than `Math.hypot(...v)`

**Kind**: global constant  
**Returns**: <code>number</code> - L2 norm  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="lDist"></a>

## lDist
L distance between a pair of vectors

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>array</code> | Defines the Lp space |
| dim | <code>number</code> | Dimension of the input data (Optional) |


* * *

<a name="max"></a>

## max ⇒ <code>number</code>
This version is muuuch faster than `Math.max(...v)`.

**Kind**: global constant  
**Returns**: <code>number</code> - The largest number  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="maxVector"></a>

## maxVector ⇒ <code>array</code>
Get the max vector

**Kind**: global constant  
**Returns**: <code>array</code> - Max vector  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>array</code> | Array of vectors |


* * *

<a name="mean"></a>

## mean ⇒ <code>number</code>
Get the mean of a vector

**Kind**: global constant  
**Returns**: <code>number</code> - The mean  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="meanNan"></a>

## meanNan ⇒ <code>number</code>
Roughly 30% slower than `mean()`

**Kind**: global constant  
**Returns**: <code>number</code> - The mean  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="meanVector"></a>

## meanVector ⇒ <code>array</code>
Get the mean vector

**Kind**: global constant  
**Returns**: <code>array</code> - Mean vector  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>array</code> | Array of vectors |


* * *

<a name="median"></a>

## median ⇒ <code>number</code>
Get the median of a vector

**Kind**: global constant  
**Returns**: <code>number</code> - The median  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="medianVector"></a>

## medianVector ⇒ <code>array</code>
Get the median vector

**Kind**: global constant  
**Returns**: <code>array</code> - The median vector  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>array</code> | Array of vectors |


* * *

<a name="min"></a>

## min ⇒ <code>number</code>
This version is muuuch faster than `Math.min(...v)` and support longer
vectors than 256^2, which is a limitation of `Math.min.apply(null, v)`.

**Kind**: global constant  
**Returns**: <code>number</code> - The smallest number  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="minVector"></a>

## minVector ⇒ <code>array</code>
Get the min vector

**Kind**: global constant  
**Returns**: <code>array</code> - Min vector  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>array</code> | Array of vectors |


* * *

<a name="mod"></a>

## mod ⇒ <code>number</code>
Non-negative modulo function. E.g., `mod(-1, 5) === 4` while `-1 % 5 === -1`.

**Kind**: global constant  
**Returns**: <code>number</code> - Remainder  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Dividend |
| y | <code>number</code> | Divisor |


* * *

<a name="normalize"></a>

## normalize ⇒ <code>array</code>
Normalize vector

**Kind**: global constant  
**Returns**: <code>array</code> - Unit vector  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |


* * *

<a name="range"></a>

## range ⇒ <code>array</code>
A function to created a range array

**Kind**: global constant  
**Returns**: <code>array</code> - Range array  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | Start of the range (included) |
| end | <code>number</code> | End of the range (excluded) |
| stepSize | <code>number</code> | Increase per step |


* * *

<a name="rangeMap"></a>

## rangeMap ⇒ <code>array</code>
This is equivalent to `Array(length).fill().map(mapFn)` but about 60% faster

**Kind**: global constant  
**Returns**: <code>array</code> - Initialized array  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | Size of the array |
| mapFn | <code>function</code> | Mapping function |


* * *

<a name="sum"></a>

## sum ⇒ <code>number</code>
Get the sum of a vector while ignoring NaNs

**Kind**: global constant  
**Returns**: <code>number</code> - The sum  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | Numerical vector |

**Example**  
```js
sum([0, 10, 12, 22])
// >> 42
```

* * *

<a name="sumVector"></a>

## sumVector ⇒ <code>array</code>
Get the sum vector

**Kind**: global constant  
**Returns**: <code>array</code> - Sum vector  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>array</code> | Array of vectors |


* * *

<a name="unionIntegers"></a>

## unionIntegers ⇒ <code>array</code>
Get the unique union of two vectors of integers

**Kind**: global constant  
**Returns**: <code>array</code> - Unique union of `v` and `w`  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>array</code> | First vector of integers |
| w | <code>array</code> | Second vector of integers |


* * *

