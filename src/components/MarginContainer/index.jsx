import "./MarginContainer.css";

export default function MarginContainer({ children }) {
  return (
    <div className="margin__container">
      <section className="margin__container-section">{children}</section>
    </div>
  );
}
