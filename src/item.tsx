import React from "react";

interface Iprops extends React.PropsWithChildren<{}> {
    count: number;
}

function Item(props: Iprops) {
    console.log("item render ")
    return <div>This is Item {props.count} {props.children}</div>;
}

export default React.memo(Item);