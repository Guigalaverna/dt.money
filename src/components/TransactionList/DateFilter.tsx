export function DateFilter({ column }) {
  const { filterName, setFilter } = column;

  return (
    <span style={{ marginTop: "1rem" }}>
      <input
        type="date"
        value={filterName}
        onChange={e =>
          setFilter(
            e.target.value.trim()
              ? new Date(e.target.value).toLocaleDateString()
              : ""
          )
        }
        style={{
          padding: "15px",
          border: "none",
          background: "transparent",
        }}
        placeholder="Termo de Pesquisa"
      />
    </span>
  );
}
