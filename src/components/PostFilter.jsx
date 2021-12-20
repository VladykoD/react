import React from 'react';
import Input from "./ui/input/Input";
import Select from "./ui/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="поиск"
            ></Input>
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="сортировка"
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'body', name: 'по описанию'},
                ]}
            />
        </div>

    );
};

export default PostFilter;
