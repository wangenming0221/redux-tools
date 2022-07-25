// import { useEffect, useState } from 'react';
// import { Tree } from 'antd';
// import { httpPost, StringPost, httpGet } from '../api/request'; //这是我自己封装的网络请求，可根据自己封装的进行更改

export default function TreeList() {

    // const [maintainer, setMaintainer] = useState([]);

    // const [selector, setSelector] = useState({});

    // const [tree, setTree] = useState([]);

    // const [defaultVal, setDefaultVal] = useState([]);

    // const onSelect = (selectedKeys, info) => {
    //     console.log('selected', selectedKeys, info);
    // };
    
    // const onCheck = (checkedKeys, info) => {
    //     console.log('onCheck', checkedKeys, info);
    // };
    // // 先获取表格数据
    // const getTable = () => {
    //     const params = {
    //         url:'/api/msx-proxy-operator/maintainer/servicer/capacity/pageQuery',
    //         data:{
    //             pageNo:1,
    //             pageSize:10,
    //         }
    //     };
    //     httpPost(params)
    //         .then(res => {
    //             setMaintainer(res.model.datas);
    //         });
    // };
    // // 把当前数据赋值到树型结构上
    // const init = (options) => {
    //     const params = {
    //         url:'/api/msx-proxy-operator/maintainer/servicer/capacity/baseInfo',
    //         data:{
    //             maintainerCode:options.maintainerVO.maintainerCode
    //         }
    //     };

    //     StringPost(params)
    //         .then(res => {
    //             //把接口获取到的单条数据给selector
    //             setSelector(Object.assign({}, res.model));
    //             //被选中的数组
    //             const selected = [];
    //             res.model.projectList.forEach(item => {
    //                 // 每次循环把1，2，3级id加到数组里
    //                 for(let i = 0;i<3;i++) {
    //                     if(i === 0) {
    //                         selected.push(item.oneCategoryId)
    //                     }
    //                     if(i === 1) {
    //                         selected.push(item.twoCategoryId)
    //                     }
    //                     if(i === 2) {
    //                         selected.push(item.threeCategoryId)
    //                     }
    //                }
    //             });
    //             setDefaultVal(selected)
                
    //         });
    // };
    // // 获取树型结构
    // const getTree = () => {
    //     const params = {
    //         url:'/api/msx-proxy-operator/operator/product/category/queryCategoryTree',
    //         data:{}
    //     };
    //     httpGet(params)
    //         .then(res => {
    //             setTree(res.model);
    //         });
    // };

    // useEffect(() => {
    //     // 先获取表格数据
    //     getTable()
    //      // 获取树型结构
    //     if(tree.length === 0){ 
    //         getTree()
    //     }
    // },[ selector, tree ])

    return (
        <>
            权限
            {/* {
                maintainer.length > 0 ?
                <ul>
                    {
                        maintainer.map((item, index) => { //点击当前条数据的时候对树型结构已选中数据进行渲染
                            return <li key={index} onClick={() => {init(item)}}>{ item.maintainerVO.maintainerName }</li>
                        })
                    }
                </ul>
                :
                <div>无数据</div>
            }
            {
                tree.length > 0 && defaultVal.length > 0 ? //必须要在赋值后在渲染树型结构，不然会出现树型结构已选中数据渲染不成功的问题
                <Tree
                    fieldNames={{title: 'name',key: 'id'}}
                    defaultExpandedKeys={defaultVal} 
                    defaultSelectedKeys={defaultVal} 
                    defaultCheckedKeys={defaultVal} 
                    checkable
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={tree}
                    />
                :
                <div>无数据</div>    
            } */}
        </>
    )
};