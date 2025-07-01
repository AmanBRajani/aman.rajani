'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Aman Rajani | Dashboard</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 20% 20%, #1f1f47, #000)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            backdropFilter: 'blur(15px)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '2rem',
            padding: '3rem 4rem',
            textAlign: 'center',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              letterSpacing: '2px',
              fontWeight: 'bold',
            }}
          >
            Coming Soon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: '1.2rem',
              color: '#ccc',
              lineHeight: '1.6',
            }}
          >
            My dashboard is getting a dope upgrade. Stay tuned for the magic. 🚀
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: '1.2rem',
              color: '#aaa',
              marginTop: '1.5rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              fontFamily: 'monospace',
              textShadow: '0 2px 8px #222, 0 0 2px #fff2',
            }}>
            <span style={{
              background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              padding: '0.2em 0.6em',
              borderRadius: '0.5em',
              boxShadow: '0 2px 12px #e52e7133',
              display: 'inline-block'
            }}>
              -AmanBRajani
            </span>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
