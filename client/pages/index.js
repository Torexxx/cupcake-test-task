import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Index = () => {
  const [rubUsd, setRubUsd] = useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [rubEur, setRubEur] = useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [eurUsd, setEurUsd] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  useEffect(() => {
    axios('http://localhost:5000/api/v1/first/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          first: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
          // second: (second.RUB / second.USD).toFixed(2),
          // third: (third.RUB / third.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          first: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
          // second: (second.RUB / second.USD).toFixed(2),
          // third: (third.RUB / third.USD).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          first: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
          // second: (second.RUB / second.USD).toFixed(2),
          // third: (third.RUB / third.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.first, rubEur.first, eurUsd.first]);
  useEffect(() => {
    axios('http://localhost:5000/api/v1/second/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          second: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          second: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          second: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.second, rubEur.second, eurUsd.second]);
  useEffect(() => {
    axios('http://localhost:5000/api/v1/third/poll').then((res) => {
      setRubUsd((prev) => {
        return {
          ...prev,
          third: (res.data.rates.RUB / res.data.rates.USD).toFixed(2),
        };
      });

      setRubEur((prev) => {
        return {
          ...prev,
          third: (res.data.rates.RUB / res.data.rates.EUR).toFixed(2),
        };
      });
      setEurUsd((prev) => {
        return {
          ...prev,
          third: (res.data.rates.EUR / res.data.rates.USD).toFixed(2),
        };
      });
    });
  }, [rubUsd.third, rubEur.third, eurUsd.third]);
  return (
    <div className={styles.wrapper}>
      <table className={styles.respTab}>
        <thead>
          <tr>
            <th>Pair name/market</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RUB/USD</td>
            <td>{rubUsd.first}</td>
            <td>{rubUsd.second}</td>
            <td>{rubUsd.third}</td>
          </tr>
          <tr>
            <td>RUB/EUR</td>
            <td>{rubEur.first}</td>
            <td>{rubEur.second}</td>
            <td>{rubEur.third}</td>
          </tr>
          <tr>
            <td>EUR/USD</td>
            <td>{eurUsd.first}</td>
            <td>{eurUsd.second}</td>
            <td>{eurUsd.third}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
