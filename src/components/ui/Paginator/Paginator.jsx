import React from 'react';
import Button from "../button/Button";
import {getPagesArray} from "../../../utils/pages";
import styles from './Paginator.module.css'

const Paginator = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)


    return (
        <div className={styles.pagerWrap}>
            {pagesArray.map(p =>
                <Button
                    key={p}
                    onClick={() => changePage(p)}
                    data-class={page === p ? 'page__current' : ''}
                >{p}</Button>
            )}
        </div>
    );
};

export default Paginator;
