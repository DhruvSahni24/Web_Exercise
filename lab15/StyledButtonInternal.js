export function InternalStyledButton() {
    return (
      <>
        <style>{`
          .internal-btn {
            background-color: green;
            color: white;
            font-size: 16px;
            padding: 10px 15px;
            margin-right: 10px;
          }
        `}</style>
        <button className="internal-btn">Internal CSS</button>
      </>
    );
  }
  