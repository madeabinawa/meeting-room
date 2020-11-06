import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Pengajuan extends Component {
    constructor() {
        super()
        this.state = {
            length: 0,
            datas: []
        }
        this.acceptRequest = this.acceptRequest.bind(this);
        this.declineRequest = this.declineRequest.bind(this);


    }
    // menyetujui pengajuan
    acceptRequest() { }

    // menolak pengajuan
    declineRequest() { }

    componentDidMount() {
        fetch('http://localhost:3001/dataPinjam').then(res => res.json()).then(res => this.setState({
            length: res.length,
            datas: res
        }, console.log(res)))
    }


    render() {
        const { datas } = this.state
        const datasItem = datas.map((data) => {
            if (data.status === 0)
                return <Card style={{ width: "80vw", marginTop: "10px", marginBottom: "10px" }}>
                    <Card.Header>24/12/12</Card.Header>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>John Doe</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>General Manager</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Telepon: +62 888 888 8888</ListGroupItem>
                        <ListGroupItem>Peserta: 10 Orang</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="outline-success">Terima</Button>{" "}
                        <Button variant="outline-danger">Batal</Button>{" "}
                    </Card.Body>
                    {/* <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
                </Card >
        })


        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="container">
                            <h1 className="display-4">Data Pengajuan</h1>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row" >
                        {datasItem}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
