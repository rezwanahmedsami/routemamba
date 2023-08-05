package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
	"github.com/rezwanahmodsami/go-fiber-routemamba-application/routers"
)

func main() {
	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Static("/static", "./public")

	// Use the capitalized function name
	routers.RegisterRoutes(app)

	app.Listen(":3002")
}
