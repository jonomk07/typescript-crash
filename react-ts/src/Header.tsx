export interface Props {
    title: string;
    color?: string;
}


const Header = (props: Props) => {
   return (
      <header style={{color: props.color ? props.color: 'blue'}}>
            <h1>{props.title}</h1>
        </header>
   );
};

export default Header;