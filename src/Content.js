const Content = () => {
  const handleName = () => {
    const name = ["Ayeshan", "Thizitha", "Melani", "Pasindu", "Hasitha"];
    const int = Math.floor(Math.random() * 5);
    return name[int];
  };
  return (
    <div>
      <h1>Hello, {handleName()}!</h1>
    </div>
  );
};

export default Content;
