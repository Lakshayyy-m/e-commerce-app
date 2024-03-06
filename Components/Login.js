import React, { useState } from "react";
import styles from "./Login.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Login = (props) => {
  const [login, setLogin] = useState(false);

  return (
    <main className={styles.wrapper}>
      <AnimatePresence>
        {login ? (
          <motion.form
            className={styles.formLogin}
            key="formLogin"
            exit={{ y: -20 }}
            layoutId="formLogin"
          >
            <motion.h1 layoutId="loginHeader">Login</motion.h1>
            <motion.input
              layoutId="username"
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
            />
            <motion.input
              layoutId="password"
              type="text"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            <motion.button
              className={styles.loginButton}
              layoutId="loginButton"
              layout="position"
              type="button"
              onClick={() => props.changeLoginStatus(true)}
            >
              Login
            </motion.button>
            <motion.div
              className={styles.loginChangerWrapper}
              layoutId="loginChangerWrapper"
              layout="position"
            >
              <p>Don&apos;t have an account? </p>
              <button
                type="button"
                className={styles.loginChanger}
                onClick={() => {
                  setLogin(false);
                }}
              >
                Sign Up
              </button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.form
            className={styles.formSignup}
            key="formLogin"
            exit={{ y: -20 }}
            layoutId="formLogin"
          >
            <motion.h1 layoutId="loginHeader" layout="position">
              Sign Up
            </motion.h1>
            <motion.input
              layoutId="username"
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input}
            />
            <motion.input
              layoutId="password"
              type="text"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            <motion.input
              layoutId="phonenum"
              type="text"
              name="phonenum"
              placeholder="Phone Number"
              className={styles.input}
            />
            <motion.input
              layoutId="Address"
              type="text"
              name="address"
              placeholder="Address"
              className={styles.input}
            />
            <motion.button
              className={styles.loginButton}
              layoutId="loginButton"
              layout="position"
            >
              Signup
            </motion.button>
            <motion.div
              className={styles.loginChangerWrapper}
              layoutId="loginChangerWrapper"
              layout="position"
            >
              <p>Already have an account? </p>
              <button
                type="button"
                className={styles.loginChanger}
                onClick={() => {
                  setLogin(true);
                }}
              >
                Log In
              </button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Login;
