import classes from './styles/Card.module.css';

const ModalBackground = (props) =>{
  return <section onClick={props.setRegister} className={classes.modal}></section>;
}

export default ModalBackground;