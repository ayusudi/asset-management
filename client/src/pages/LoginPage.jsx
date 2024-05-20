import { StyleSheet, useEffect, useRef } from "react"
import illustration from "../assets/illustration-login.png"
import company from "../assets/company.png"
import { useWindowResizeThreshold } from "./CustomHooks"

export default function LoginPage() {
  const isDesktopSize = useWindowResizeThreshold(800)
  useEffect(() => {
    //Some more code to execute when the mobile size is toggled
    console.log(isDesktopSize);
  }, [isDesktopSize])

  return (
    <section style={styles.container}>
      {
        isDesktopSize && <div style={styles.imageSection}>
          <img src={illustration} style={styles.image} />
        </div>
      }
      <div style={styles.loginSection}>
        <form action="post" style={styles.form}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 30 }}>
            <img src={company} style={{ width: 100, height: 100 }} />
            <h1>Asset Management</h1>
          </div>

          <div>
            <input type="text" name="email" id="email" placeholder="Email" style={styles.input} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" style={styles.input} />
          </div>
          <div>
            <button type="submit" style={{ ...styles.input, justifyContent: "center", alignItems: "center", marginTop: 15, marginBottom: 20, backgroundColor: "#5A83D4", color: "white", borderRadius: 18, fontWeight: 700 }}>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh"
  },
  imageSection: {
    display: "flex",
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "50vw",
    aspectRatio: "230/180",
    objectFit: "contain",
    minWidth: 300
  },
  loginSection: {
    backgroundColor: "#2F4EAD",
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: '50%',
    padding: 50,
  },
  input: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 5
  }
}
