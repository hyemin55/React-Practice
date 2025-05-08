function CourseCard(props) {
  const tagsLength = Number(props.tags.length)

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "40vw",
          margin: "0 auto",
        }}
      >
        <img src={props.img} alt="" style={{ width: "40vw" }} />
        <div style={{ display: "flex" }}>
          {props.tags.map((tag, index) => (
            <p key={index} style={{ fontSize: "1.4rem" }}>
              {tag}
              <span >{tagsLength >= tag.length && "•"}</span>
            </p>
          ))}
        </div>
        <h1 style={{ fontSize: "2.0rem", marginBottom: "2%" }}>
          {props.title}
        </h1>
        <p style={{ fontSize: "1.7rem" }}>
          {props.startPrice.toLocaleString()}원부터
        </p>
        <p style={{ fontSize: "1.3rem", color: "purple", cursor: "pointer" }}>
          {props.types}
        </p>
      </div>
    </section>
  );
}

export default CourseCard;
