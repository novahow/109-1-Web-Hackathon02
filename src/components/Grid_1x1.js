//import { expr } from "cypress/types/jquery"
import React, { Component } from "react";
import "./Grid.css"
class Grid_1x1 extends Component{

//TODO

// Useful hints:
// for React Component:
    render(){
        let row = this.props.row_index
        let col = this.props.col_index
        const gridStyle = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: row % 3 == 0 ? '1.5px transparent #999': '1.5px solid #999',
            borderLeft: col % 3 == 0 ? '1.5px transparent #999': '1.5px solid #999',
            borderBottom: row % 3 == 2 ? '1.5px transparent #999': '1.5px solid #999',
            borderRight: col % 3 == 2 ? '1.5px transparent #999': '1.5px solid #999',
        };
        return (
            <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                { this.props.value === "0" ? "" : this.props.value}
            </div>
        );
        /*const style1 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px transparent #999',
            borderLeft: '1.5px transparent #999',
            borderBottom: '1.5px solid #999',
            borderRight: '1.5px solid #999'
        };
        const style2 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px transparent #999',
            borderLeft: '1.5px solid #999',
            borderBottom: '1.5px solid #999',
            borderRight: '1.5px solid #999'
        };
        const style3 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px transparent #999',
            borderLeft: '1.5px solid #999',
            borderBottom: '1.5px solid #999',
            borderRight: '1.5px transparent #999'
        };
        const style4 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px solid #999',
            borderLeft: '1.5px transparent #999',
            borderBottom: '1.5px solid #999',
            borderRight: '1.5px solid #999'
        };
        
        const style6 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px solid #999',
            borderLeft: '1.5px solid #999',
            borderBottom: '1.5px solid #999',
            borderRight: '1.5px transparent #999'
        };
        const style7 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px solid #999',
            borderLeft: '1.5px transparent #999',
            borderBottom: '1.5px transparent #999',
            borderRight: '1.5px solid #999'
        };
        const style8 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px solid #999',
            borderLeft: '1.5px solid #999',
            borderBottom: '1.5px transparent #999',
            borderRight: '1.5px solid #999'
        };
        const style9 = {
            color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
            backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
            borderTop: '1.5px solid #999',
            borderLeft: '1.5px solid #999',
            borderBottom: '1.5px transparent #999',
            borderRight: '1.5px transparent #999'
        };*/

        //console.log(row)
        /*if(row % 3 == 1 && col % 3 == 1){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 0 && col % 3 == 0){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style1} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 0 && col % 3 == 1){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style2} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 0 && col % 3 == 2){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style3} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 1 && col % 3 == 0){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style4} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 1 && col % 3 == 2){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style6} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 2 && col % 3 == 0){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style7} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 2 && col % 3 == 1){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style8} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }
        else if(row % 3 == 2 && col % 3 == 2){
            return (
                <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={style9} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
                    { this.props.value === "0" ? "" : this.props.value}
                </div>
            );
        }*/
    }
}
// for React Hook:
// const gridStyle = {
//     color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
//     backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${props.row_index}*${props.col_index}`} tabindex="1" style={gridStyle} onClick={() => props.handle_grid_1x1_click(props.row_index, props.col_index)}>
//         { props.value === "0" ? "" : props.value}
//     </div>
// );
export default Grid_1x1