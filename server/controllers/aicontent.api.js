var express = require("express");
var router = express.Router();

var AiContent = require("../models/aicontent.model");

router.get("/apicontents", function (req, res) {
    AiContent.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/apicontent/:id", function (req, res) {
    var id = req.params.id;
    AiContent.find({_id: id}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/create", function (req, res) {
    var obj = req.body;

    console.log(obj);

    var model = new AiContent(obj);
    model.save(function (err, data) {
        if (err) {
            console.error(err)
            res.send("error");
            return;
        }
        res.send("added");
    });
});

router.put("/update/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    AiContent.findOneAndUpdate({_id: id}, {name: obj.name, keywords: obj.keywords, content: obj.content}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("updated");
    })
});

router.delete("/delete/:id", function (req, res) {
    var id = req.params.id;
    AiContent.findByIdAndRemove(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;