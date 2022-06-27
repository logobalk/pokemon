import { Button } from 'antd';

const CustomButton = (props) => {
  // shape : round, circle
  // type : primary, link
  // size : large,
  return (
    <Button
      type={props.type}
      style={props.style}
      shape={props.shape}
      size={props.size}
      onClick={props.onClick}
      loading={props.loading}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
