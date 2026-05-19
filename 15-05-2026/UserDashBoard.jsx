import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [cleanupMessage, setCleanupMessage] = useState("");

  /*
    Fetch users
    - useCallback memoizes the function
    - changes only when `filter` changes
   */
  const fetchUsers = useCallback(async (signal) => {
    try {
      setLoading(true);

      const response = await fetch(USERS_API, { signal });
      const data = await response.json();

      // Filter users based on input
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );

      setUsers(filtered);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }, [filter]);

  /*
   useEffect
    - fetches on mount
    - refetches whenever filter changes
    - cleanup aborts previous request
   */
  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    return () => {
      controller.abort();
      console.log("Cleanup: request aborted");
      setCleanupMessage("Cleanup ran: previous request aborted");
    };
  }, [fetchUsers]);

  /*
   Expensive derived calculation
    useMemo prevents recalculation unless users changes
   */
  const averageNameLength = useMemo(() => {
    console.log("Computing expensive value...");

    if (users.length === 0) return 0;

    // Simulate expensive work
    let total = 0;

    for (let i = 0; i < 1000000; i++) {
      // fake heavy loop
    }

    users.forEach((user) => {
      total += user.name.length;
    });

    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Users Dashboard</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      {/* Refresh Button */}
      <button
        onClick={() => {
          const controller = new AbortController();
          fetchUsers(controller.signal);
        }}
        style={{ padding: "8px 12px" }}
      >
        Refresh
      </button>

      <hr />

      {/* Loading */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <h3>Total Users: {users.length}</h3>

          <h3>Average Name Length: {averageNameLength}</h3>

          <ul style={{listStyleType : "none"}}>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Cleanup verification */}
      {cleanupMessage && (
        <div
          style={{
            marginTop: "20px",
            color: "green",
            fontWeight: "bold",
          }}
        >
          {cleanupMessage}
        </div>
      )}
    </div>
  );
}