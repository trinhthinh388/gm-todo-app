import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
        }
        this.onEditItemHandle = this.onEditItemHandle.bind(this);
        this.onEditItemKeyDownHandle = this.onEditItemKeyDownHandle.bind(this);
        this.onEditItemBlurHandle = this.onEditItemBlurHandle.bind(this);
    }

    onCompleteClickHandle =()=>{
        this.props.UpdateItem(
            null, 
            !this.props.check,
            this.props.index
        );
    }

    onInputChangeHandle =(e)=>{
        let value = e.currentTarget.value;
        
        this.props.UpdateItem(value, false, this.props.index);
    }

    onDeleteClickHandle = ()=>{
        this.props.deleteItem(this.props.index);
    }

    onEditItemHandle(){
        this.setState({
            edit: true,
        })
    }

    onEditItemKeyDownHandle(e){
        if(e.key === 'Enter'){
            this.setState({
                edit: false,
            })
        }
    }

    onEditItemBlurHandle(e){
        this.setState({
            edit: false,
        })
    }

    render(){
        const {check, content, index} = this.props;
        return(
            <div className="mx-auto list__item d-flex flex-row align-items-center col-lg-6">
                <div onClick={this.onCompleteClickHandle}  className={classNames("item__circle-check", {"circle--focus": check})}>
                    <FontAwesomeIcon className={classNames({"check--display": check})} icon={faCheck} color="#28A745" size="2x"/>
                </div>
                <div className="item__content">
                    {
                        this.state.edit === false ?
                        <div onDoubleClick={this.onEditItemHandle} >{content}</div>
                        :
                        <input onKeyDown={this.onEditItemKeyDownHandle} onBlur={this.onEditItemBlurHandle} onChange={this.onInputChangeHandle} defaultValue={content}></input>
                    }
                </div>
                <FontAwesomeIcon onClick={this.onDeleteClickHandle} className="item__delete" icon={faTimes} color="#DC3545" size="2x"/>
             </div>
        );
    }
}
