import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ section, onSectionChange, showViral, onShowViralChange }) => {
  return (
    <div className={styles.sectionSelector}>
      <div className={styles.dropdownGroup}>
        <label htmlFor="section-select" className={styles.dropdownLabel}>
          Choose a Section:
        </label>
        <select
          id="section-select"
          className={styles.dropdown}
          onChange={onSectionChange}
          value={section}
        >
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className={styles.toggleGroup}>
        <label className={styles.toggleLabel}>
          Show Viral Images
          <input
            type="checkbox"
            checked={showViral}
            onChange={onShowViralChange}
            className={styles.toggleInput}
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
