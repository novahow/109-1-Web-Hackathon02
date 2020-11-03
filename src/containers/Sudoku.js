import React, { Component } from 'react';
import ReactLoading from "react-loading";
import { Fireworks } from 'fireworks/lib/react'

import "./Sudoku.css"
import Header from '../components/Header';
import Grid_9x9 from '../components/Grid_9x9';
import ScreenInputKeyBoard from '../components/ScreenInputKeyBoard'
import { problemList } from "../problems"

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true, // Return loading effect if this is true.
            problem: null, // Stores problem data. See "../problems/" for more information.This is the origin problem and should not be modified. This is used to distinguish the fixed numbers from the editable values
            gridValues: null,  // A 2D array storing the current values on the gameboard. You should update this when updating the game board values.
            selectedGrid: { row_index: -1, col_index: -1 }, // This objecct store the current selected grid position. Update this when a new grid is selected.
            gameBoardBorderStyle: "8px solid #000", // This stores the gameBoarderStyle and is passed to the gameboard div. Update this to have a error effect (Bonus #2).
            completeFlag: false, // Set this flag to true when you wnat to set off the firework effect.
            conflicts: [{ row_index: -1, col_index: -1 }] // The array stores all the conflicts positions triggered at this moment. Update the array whenever you needed.
        }
    }

    handle_grid_1x1_click = (row_index, col_index) => {
        // TODO
        
        // Useful hints:
        console.log(this.state.gridValues[row_index][col_index]);
        this.setState({
            selectedGrid : {row_index, col_index}
        })
        console.log(this.state.selectedGrid)
    }

    handleKeyDownEvent = (event) => {
        // TODO
        // Useful hints:
        let confs = []
        console.log(event)
        if (this.state.problem.content[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index] !== "0") {

        }
        else if (this.state.gridValues !== null && this.state.selectedGrid.row_index !== -1 && this.state.selectedGrid.col_index !== -1
             && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
                 console.log(event.keyCode - 48)
                 let row = this.state.selectedGrid.row_index;
                 let col = this.state.selectedGrid.col_index;
                 let cnt = 0;
                 if(event.keyCode <= 57){
                    let tmp = this.state.gridValues.slice();
                    let inval = 0;
                    let ipval = event.keyCode - 48;
                    
                    for(var i = 0; i < 9; i++){
                        console.log(tmp[row][i])
                        if(tmp[row][i] != '0' && ((i != col && tmp[row][i] == ipval))){
                            inval = 1;
                            confs.push({row_index : row, col_index: i})
                            this.setState({
                                conflicts : confs,
                            })
                            setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                        }
                        else if((tmp[i][col] != '0' && i != row && tmp[i][col] == ipval)){
                            inval = 1;
                            //let confs = this.state.conflicts.slice();
                            confs.push({row_index:i, col_index:col})
                            this.setState({
                                conflicts : confs,
                            })
                            setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                        }
                    }
                    let br = (row - (row % 3)) / 3;
                    let bc = (col - (col % 3)) / 3;
                    console.log(br, bc);
                    for(var i = br * 3; i < br * 3 + 3; i++){
                        for(var j = bc * 3; j < bc * 3 + 3; j++){
                            if((i != row || j != col) && tmp[i][j] == ipval && inval != '0'){
                                inval = 1;
                                if(i != row && j != col){
                                    //let confs = this.state.conflicts.slice();
                                    confs.push({row_index: i, col_index: j})
                                    this.setState({
                                        conflicts : confs,
                                    })
                                    setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                                }
                            }
                        }
                    }
                    if(!inval){
                        tmp[row][col] = String(event.keyCode - 48);
                        this.setState({
                            gridValues : tmp,
                        })
                        //this.setState({ gameBordBoarderStyle: "8px solid #333" })
                    }
                    else{
                        this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                        setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333"  }); }, 1000);
                    }
                    for(var i = 0; i < 9; i++){
                        for(var j = 0; j < 9; j++){
                            if(tmp[i][j] != '0'){
                                cnt += 1;
                            }
                        }
                    }
                    if(cnt == 81){
                        this.setState({ completeFlag: true });
                        setTimeout(() => { this.setState({ completeFlag: false }); }, 2500);
                    }
                    console.log('wow', confs)
                }
                else{
                    let tmp = this.state.gridValues.slice();
                    tmp[row][col] = String(event.keyCode - 96);
                    this.setState({
                        gridValues : tmp,
                    })
                }
             }
        //if (this.state.problem.content[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index] === "0") {}
    }

    handleScreenKeyboardInput = (num) => {
        /*this.setState({
            conflicts : [],
        })*/
        console.log(num)
        let confs = []
        if (this.state.problem.content[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index] !== "0") {

        }
        else if (this.state.gridValues !== null && this.state.selectedGrid.row_index !== -1 && this.state.selectedGrid.col_index !== -1){
            let row = this.state.selectedGrid.row_index;
            let col = this.state.selectedGrid.col_index;
            let tmp = this.state.gridValues.slice();
            let inval = 0;
            let ipval = num;
            let cnt = 0;
            for(var i = 0; i < 9; i++){
                if(tmp[row][i] != '0' && ((i != col && tmp[row][i] == ipval))){
                    inval = 1;
                    //let confs = this.state.conflicts.slice();
                    confs.push({row_index : row, col_index: i})
                    this.setState({
                        conflicts : confs,
                    })
                    setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                }
                else if((tmp[i][col] != '0' && i != row && tmp[i][col] == ipval)){
                    inval = 1;
                    //let confs = this.state.conflicts.slice();
                    confs.push({row_index: i, col_index: col})
                    this.setState({
                        conflicts : confs,
                    })
                    setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                }
            }
            let br = (row - (row % 3)) / 3;
            let bc = (col - (col % 3)) / 3;
            console.log(br, bc);
            for(var i = br * 3; i < br * 3 + 3; i++){
                for(var j = bc * 3; j < bc * 3 + 3; j++){
                    if((i != row || j != col) && tmp[i][j] == ipval && num != 0){
                        inval = 1;
                        if(i != row && j != col){
                            //let confs = this.state.conflicts.slice();
                            confs.push({row_index: i, col_index:j})
                            this.setState({
                                conflicts : confs,
                            })
                            setTimeout(() => { this.setState({ conflicts : [], }); }, 1000);
                        }
                    }
                }
            }
            if(!inval){
                tmp[row][col] = String(num);
                this.setState({
                    gridValues : tmp,
                })
            }
            else{
                this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
            }
            for(var i = 0; i < 9; i++){
                for(var j = 0; j < 9; j++){
                    if(tmp[i][j] != '0'){
                        cnt += 1;
                    }
                }
            }
            if(cnt == 81){
                this.setState({ completeFlag: true });
                setTimeout(() => { this.setState({ completeFlag: false }); }, 2500);
            }
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDownEvent);
    }

    loadProblem = async (name) => {
        this.setState({
            loading: true,
            problem: null,
            gridValues: null,
            selectedGrid: { row_index: -1, col_index: -1 }
        });

        const problem = await require(`../problems/${name}`)
        if (problem.content !== undefined) {
            let gridValues = [];
            for (let i = 0; i < problem.content.length; i++)
                gridValues[i] = problem.content[i].slice();
            this.setState({ problem: problem, gridValues: gridValues, loading: false });
        }
    }

    extractArray(array, col_index, row_index) {
        let rt = []
        for (let i = row_index; i < row_index + 3; i++) {
            for (let j = col_index; j < col_index + 3; j++) {
                rt.push(array[i][j])
            }
        }
        return rt;
    }

    render() {
        const fxProps = {
            count: 3,
            interval: 700,
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
            colors: ['#cc3333', '#81C784'],
            calc: (props, i) => ({
                ...props,
                x: (i + 1) * (window.innerWidth / 3) * Math.random(),
                y: window.innerHeight * Math.random()
            })
        }
        return (
            <>
                <Header problemList={problemList} loadProblem={this.loadProblem} gridValues={this.state.gridValues} problem={this.state.problem} />
                {this.state.loading ? (<ReactLoading type={"bars"} color={"#777"} height={"40vh"} width={"40vh"} />) : (
                    <div id="game-board" className="gameBoard" style={{ border: this.state.gameBoardBorderStyle }}>
                        <div className="row">
                            <Grid_9x9 row_offset={0} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={0} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={0} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 row_offset={3} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={3} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={3} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 row_offset={6} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={6} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={6} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                    </div>
                )}
                {this.state.completeFlag ? (<Fireworks {...fxProps} />) : null}
                {this.state.loading ? null : (<ScreenInputKeyBoard handleScreenKeyboardInput={this.handleScreenKeyboardInput} />)}
            </>
        );
    }
}

export default Sudoku;