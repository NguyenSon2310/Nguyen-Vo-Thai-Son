import express from "express";
import { ResourceService } from "../services/resourceService";
import { resourceRepository } from "../repositories/resourceRepository";

const router = express.Router();

// Initialize the ResourceService
const resourceService = new ResourceService(resourceRepository);

// Route to create a resource
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const resource = await resourceService.createResource({
      name,
      description,
    });
    res.status(201).json(resource);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
});

// Route to list resources with filters
router.get("/", async (req, res) => {
  try {
    const { name, description } = req.query;
    const resources = await resourceService.listResources({
      name: name as string,
      description: description as string,
    });
    res.status(200).json(resources);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
});

// Route to get a resource by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.findResourceById(Number(id));
    res.status(200).json(resource);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
});

// Route to update a resource
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedResource = await resourceService.updateResource(
      Number(id),
      data
    );
    res.status(200).json(updatedResource);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
});

// Route to delete a resource
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await resourceService.deleteResource(Number(id));
    res.status(204).send();
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
});

export default router;
