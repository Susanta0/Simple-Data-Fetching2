const PostItem = ({ data, page, setPage }) => {
  return (
    <>
      <h2>Display User Data</h2>
      <div className="mainContent">
        {data.map((el) => (
          <div className="content" key={el.id}>
            <h4>
              Id : <span>{el.id}</span>
            </h4>
            <h4>
              Title : <span>{el.title}</span>
            </h4>
            <h4>
              Body : <span>{el.body}</span>
            </h4>
          </div>
        ))}
      </div>

      <div className="buttonDiv">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Previus
        </button>
        <h3>{page}</h3>
        <button
          disabled={page === 10 ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default PostItem;
