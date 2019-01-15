import React from 'react';
// 使用css的两种方式  引入css  行内样式
import './Person.css'
const person=(props)=>{
    const style={
        backgroundColor:'pink',
        padding:'8px'
    }
	return (
		<div className="personHeader">
            <button style={style}>button</button>
			<p onClick={props.myclick}>大家好，我叫{props.name},我已经拥有{props.count}</p>
            
			{/* {props.children}获取伪标签中的内容 */}
			<p>{props.children}</p>
            <input type="text" onChange={props.InputChange} defaultValue={props.name}/>
		</div>
	)
}

export default person;