function Header(props) {
  return (
    <>
    <div className="px-10 pt-6"><img className="w-16" alt="" src="./IMDB_Logo_2016.svg.png" /></div>
     <div className="flex justify-center items-center px-12 py-4">
      <input
        className="border border-red-500 px-28 py-2 text-center mt-4"
        type="text"
        placeholder="Search Movies"
        value={props.text}
        onChange={props.handleChange}
      />
    </div>
    </>
     
  );
}

export default Header;
